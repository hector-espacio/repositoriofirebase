// src/componentes/Gestion/Gestion.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import FormularioProducto from '../formularioNacionales/FormularioProducto';
import { collection, getDocs, doc, deleteDoc, addDoc, updateDoc } from "firebase/firestore";

const Gestion = () => {
    const [productos, setProductos] = useState([]);
    const [productoAEditar, setProductoAEditar] = useState(null);
    const [imagenFile, setImagenFile] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [mensajeExito, setMensajeExito] = useState("");

    const estadoInicialForm = {
        nombre: "", categoria: "", precio: "", stock: "", detalles: "", destacados: false
    };

    const [datosForm, setDatosForm] = useState(estadoInicialForm);

    const fetchProductos = async () => {
        const productosRef = collection(db, "productos");
        const resp = await getDocs(productosRef);
        setProductos(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        fetchProductos();
    }, []);

    useEffect(() => {
        if (productoAEditar) {
            setDatosForm(productoAEditar);
        } else {
            setDatosForm(estadoInicialForm);
        }
    }, [productoAEditar]);

    const manejarCambio = (e) => {
        const { name, value, type, checked } = e.target;
        setDatosForm({ ...datosForm, [name]: type === 'checkbox' ? checked : value });
    };

    const manejarCambioImagen = (e) => {
        setImagenFile(e.target.files[0]);
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        setCargando(true);
        setMensajeExito("");

        try {
            let urlImagen = datosForm.foto; // Si es edición, mantenemos la anterior

            // 1. Subida a ImgBB solo si hay un archivo nuevo
            if (imagenFile) {
                const apiKey = '58bae8b360d022b99aebd9cc482c2afc';
                const formData = new FormData();
                formData.append('image', imagenFile);

                const respImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                    method: 'POST',
                    body: formData,
                });
                const dataImgbb = await respImgbb.json();
                if (!dataImgbb.success) throw new Error("Error subiendo imagen");
                urlImagen = dataImgbb.data.url;
            }

            // 2. Preparar objeto (conversión a número necesaria para Firestore)
            const productoFinal = {
                ...datosForm,
                precio: Number(datosForm.precio),
                stock: Number(datosForm.stock),
                foto: urlImagen
            };

            // 3. Crear o Actualizar
            if (productoAEditar) {
                const docRef = doc(db, "productos", productoAEditar.id);
                await updateDoc(docRef, productoFinal);
                setMensajeExito("¡Producto actualizado con éxito!");
            } else {
                await addDoc(collection(db, "productos"), productoFinal);
                setMensajeExito("¡Producto creado con éxito!");
            }

            setDatosForm(estadoInicialForm);
            setImagenFile(null);
            setProductoAEditar(null);
            fetchProductos();
        } catch (error) {
            console.error("Error:", error);
            alert("Error al guardar el producto.");
        } finally {
            setCargando(false);
        }
    };

    const handleEliminar = async (id) => {
        if (!window.confirm("¿Estás seguro?")) return;
        await deleteDoc(doc(db, "productos", id));
        setProductos(productos.filter(prod => prod.id !== id));
    };

    return (
        <div>
            <h2>Gestión de Productos</h2>
            <FormularioProducto 
                datosForm={datosForm} 
                manejarCambio={manejarCambio} 
                manejarCambioImagen={manejarCambioImagen} 
                manejarEnvio={manejarEnvio}
                cargando={cargando}
                mensajeExito={mensajeExito}
            />
            
            <h3>Lista de Productos</h3>
            <ul>
                {productos.map((prod) => (
                    <li key={prod.id}>
                        {prod.nombre} - ${prod.precio}
                        <button onClick={() => setProductoAEditar(prod)}>Editar</button>
                        <button onClick={() => handleEliminar(prod.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Gestion;