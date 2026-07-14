// En src/contenedores/FormularioContainer.jsx

import React, { useState } from 'react';

import { FormularioProducto } from
  '../FormularioProducto/FormularioProducto';

// IMPORTACIONES CLAVE DE FIREBASE

import { getFirestore, collection, addDoc } from 'firebase/firestore';

export function FormularioContainer() {

  const [datosForm, setDatosForm] = useState({
    nombre: '',
    precio: '',
    stock: '',
    categoria: ''
  });

  // Se mantiene igual
  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    if (!imagenFile) {
      // Se mantiene igual

      // LÓGICA PARA SUBIR DATOS A FIRESTORE ---
      console.log('Enviando producto a Firebase:', productoCompleto);



      // Obtenemos la instancia de la base de datos
      const db = getFirestore();
      // Apuntamos a la colección "productos" (si no existe, se crea)


      const productosCollection = collection(db, "Productos");


      // Agregamos el nuevo documento a la colección
      await addDoc(productosCollection, productoCompleto);
    } else {
      throw new Error('La subida de la imagen a Imgbb falló.');
    };
    // Reseteamos el formulario solo si todo fue exitoso
  } catch (error) {
    console.error("Error en el proceso de envío:", error);

    alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
  }


return (
  <FormularioProducto />);
}

export default FormularioContainer;

