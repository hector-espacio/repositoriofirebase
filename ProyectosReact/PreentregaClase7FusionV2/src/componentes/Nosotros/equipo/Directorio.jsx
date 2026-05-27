import { useEffect, useState } from 'react';
import TarjetaContacto from './TarjetaContacto';

function Directorio() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/nosotros.json')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar');
        return res.json();
      })
      .then(data => {
        setUsuarios(data);
        setCargando(false);
      })
      .catch(err => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p
  style={{
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'var(--color-primario)'
  }}
  >Cargando ...</p>;
  
  if (error) return <p>Error: {error}</p>;

  return (
  
  <div style={{
    display: 'flex',
    flexDirection: 'row',   // Alinea las tarjetas en fila (horizontal)
    flexWrap: 'wrap',       // Si no caben en la pantalla, bajan a la siguiente línea
    gap: '20px',            // Añade separación entre las tarjetas
    justifyContent: 'center' // Opcional: centra las tarjetas en la pantalla
  }}>
  
   
      {usuarios.map(user => (
        <TarjetaContacto key={user.id} {...user} />
      ))}
    </div>
  );
}

export default Directorio;