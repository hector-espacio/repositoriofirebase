import { useState } from "react";
import FormularioProducto from "./FormularioProducto";

function FormularioContainer() {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        precio: "",
        stock: "",
    });

    const [imagenFile, setImagenFile] = useState(null);
    
    // 💡 Nuevos estados para el feedback del usuario
    const [cargando, setCargando] = useState(false);
    const [mensajeExito, setMensajeExito] = useState("");

    const manejarCambio = (evento) => {
        const { name, value } = evento.target;
        setDatosForm({
            ...datosForm,
            [name]: value
        });
    };

    const manejarCambioImagen = (evento) => {
        setImagenFile(evento.target.files[0]);
        // Limpiamos el mensaje de éxito si el usuario cambia la imagen para subir otra
        setMensajeExito(""); 
    }

    const manejarEnvio = async (evento) => {
        evento.preventDefault();
        
        if (!imagenFile) {
            alert("Por favor, selecciona una imagen para el producto.");
            return;
        }

        // Activamos el estado de carga y limpiamos mensajes previos
        setCargando(true);
        setMensajeExito("");

        const apiKey = '58bae8b360d022b99aebd9cc482c2afc'; // 🚨 ¡Reemplazá esto con tu clave!
        const formData = new FormData();
        formData.append('image', imagenFile);

        try {
            console.log("Subiendo imagen a Imgbb...");
            const respuestaImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                method: 'POST',
                body: formData,
            });
            
            const datosImgbb = await respuestaImgbb.json();
            
            if (datosImgbb.success) {
                console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);
                
                // 💡 ¡Acá definimos el mensaje de éxito!
                setMensajeExito("¡La imagen se subió con éxito!");
                
                const productoCompleto = {
                    ...datosForm,
                    urlImagen: datosImgbb.data.url
                };
                
                console.log('Enviando datos COMPLETOS:', productoCompleto);
                
                // Opcional: Podés limpiar el formulario acá si querés
                // setDatosForm({ nombre: "", precio: "", stock: "" });
                
            } else {
                throw new Error('La subida de la imagen a Imgbb falló.');
            }
        } catch (error) {
            console.error("Error en el proceso de envío:", error);
            alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
        } finally {
            // 💡 El bloque 'finally' se ejecuta SIEMPRE (salga bien o salga mal)
            // ideal para apagar el cargando.
            setCargando(false);
        }
    };

    return (
        <FormularioProducto
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
            manejarCambioImagen={manejarCambioImagen}
            cargando={cargando}          // 👈 Pasamos el estado
            mensajeExito={mensajeExito}  // 👈 Pasamos el mensaje
        />
    )
}

export default FormularioContainer;
