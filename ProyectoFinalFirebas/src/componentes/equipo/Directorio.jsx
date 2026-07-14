import { useEffect, useState } from 'react';
import TarjetaContacto from './TarjetaContacto';
// 1. Importamos las herramientas necesarias de Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config"; // Asegúrate de que esta ruta apunte correctamente a tu config.js

function Directorio() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 2. Apuntamos a la colección "nosotros" en Firestore
    const nosotrosRef = collection(db, "nosotros");

    // 3. Solicitamos los documentos reales desde la nube
    getDocs(nosotrosRef)
      .then((resp) => {
        // Mapeamos los documentos para estructurar el objeto con sus datos y su respectivo ID de Firebase
        const data = resp.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id 
          };
        });
        setUsuarios(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando equipo...</p>;
  
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',   // Alinea las tarjetas en fila (horizontal)
      flexWrap: 'wrap',       // Si no caben en la pantalla, bajan a la siguiente línea
      gap: '20px',            // Añade separación entre las tarjetas
      justifyContent: 'center' // Centra las tarjetas en la pantalla
    }}>
      {usuarios.map(user => (
        <TarjetaContacto key={user.id} {...user} />
      ))}
    </div>
  );
}

export default Directorio;