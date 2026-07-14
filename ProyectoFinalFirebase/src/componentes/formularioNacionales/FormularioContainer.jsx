import { useState } from "react";
import FormularioProducto from "./FormularioProducto"; // 💡 Corrección del PDF: Importación correcta de la vista
// Importaciones clave de Firebase Firestore
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config"; // Asegurá la ruta correcta a tu archivo de configuración de Firebase

function FormularioContainer() {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        precio: "",
        stock: "",
        detalles: "",
        destacados: false
    });

    const [imagenFile, setImagenFile] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [mensajeExito, setMensajeExito] = useState("");

    const manejarCambio = (evento) => {
        const { name, value, type, checked } = evento.target;
        setDatosForm({
            ...datosForm,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const manejarCambioImagen = (evento) => {
        setImagenFile(evento.target.files[0]);
        setMensajeExito("");
    };

    const manejarEnvio = async (evento) => {
        evento.preventDefault();

        if (!imagenFile) {
            alert("Por favor, selecciona una imagen para el producto.");
            return;
        }

        setCargando(true);
        setMensajeExito("");

        const apiKey = '58bae8b360d022b99aebd9cc482c2afc'; // Tu clave de ImgBB
        const formData = new FormData();
        formData.append('image', imagenFile);

        try {
            console.log("Subiendo imagen a ImgBB...");
            const respuestaImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                method: 'POST',
                body: formData,
            });

            const datosImgbb = await respuestaImgbb.json();

            if (datosImgbb.success) {
                console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);

                // 1. Armamos el objeto estructurado con los datos convertidos a números
                const productoCompleto = {
                    nombre: datosForm.nombre,
                    precio: Number(datosForm.precio), // 💡 Evita texto en la BD para poder hacer cálculos matemáticos
                    stock: Number(datosForm.stock),   // 💡 Idem anterior
                    detalles: datosForm.detalles,
                    destacados: datosForm.destacados,
                    foto: datosImgbb.data.url
                };

                console.log('Guardando en Firebase Firestore:', productoCompleto);

                // 2. Referenciamos la colección de Firestore y agregamos el documento
                const productosRef = collection(db, "productos");
                await addDoc(productosRef, productoCompleto); // 💡 Firebase le asigna su ID único de forma automática

                setMensajeExito("¡El producto y la imagen se guardaron con éxito en Firebase!");

                // 3. Limpiamos el formulario para una nueva carga
                setDatosForm({
                    nombre: "",
                    precio: "",
                    stock: "",
                    foto: "",
                    detalles: "",
                    destacados: false
                });
                setImagenFile(null);

            } else {
                throw new Error('La subida de la imagen a Imgbb falló.');
            }
        } catch (error) {
            console.error("Error en el proceso de envío:", error);
            alert("Hubo un error al guardar el producto. Por favor, intentá de nuevo.");
        } finally {
            setCargando(false);
        }
    };

    return (
        <FormularioProducto
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
            manejarCambioImagen={manejarCambioImagen}
            cargando={cargando}
            mensajeExito={mensajeExito}
        />
    );
}

export default FormularioContainer;
