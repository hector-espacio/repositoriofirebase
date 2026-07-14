import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Importaciones clave de Firebase Firestore
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
// Habilitá esta línea si usás módulos CSS externos:
// import styles from './productosNacionales.module.css';

const ProductosNacionalesDetalle = () => {
    const [prod, setItem] = useState(null);
    const { id } = useParams(); // Tomamos el parámetro dinámico 'id' de la URL

    useEffect(() => {
        if (id) {
            // 1. Creamos la referencia al documento específico dentro de la colección "productos"
            const docRef = doc(db, "productos", id);

            // 2. Realizamos la petición asincrónica para obtener el documento
            getDoc(docRef)
                .then((resp) => {
                    if (resp.exists()) {
                        // 3. Unificamos los datos legibles (.data()) con su ID correspondiente (.id)
                        setItem({ ...resp.data(), id: resp.id });
                    } else {
                        console.log("No se encontró el producto");
                    }
                })
                .catch(error => console.log(error));
        }
    }, [id]); // El efecto se vuelve a ejecutar si el 'id' de la URL cambia

    return (
        <div className="detalle-contenedor">
            {prod ? (
                <div style={{ padding: '20px', fontSize: "1.4rem" }}>
                    {/* Renderizado dinámico de las propiedades extraídas de Firebase */}
                    <h2>{prod.nombre}</h2>
                    <img
                        src={prod.foto}
                        alt={prod.nombre}
                        width="300"
                    />
                    <br />  <br />
                    {/* Si tenés problemas con los \n literales de Firebase, los transformamos en saltos de línea reales */}
                    <pre style={{ whiteSpace: "pre-wrap" }}>
                        <p>{prod.detalles ? prod.detalles.replace(/\\n/g, '\n') : prod.descripcion}</p>
                    </pre>
                    <br />  
                    <p>Precio: ${prod.precio}</p>
                    {prod.stock && <p>Stock disponible: {prod.stock} unidades propias</p>}
                </div>
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    );
};

export default ProductosNacionalesDetalle;