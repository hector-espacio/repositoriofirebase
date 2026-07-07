import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

function MovieDetail() {

  const { id } = useParams();

  const [empanada, setEmpanada] = useState(null);

  useEffect(() => {

    fetch('/data/productos.json')
      .then(response => response.json())
      .then(data => {

        const empanadaFound = data.find(
          elemento => elemento.id === parseInt(id)
        );

        setEmpanada(empanadaFound);

      })
      .catch(error =>
        console.error(
          'Error al cargar el archivo:',
          error
        )
      );

  }, [id]);

  // Loading
  if (!empanada) {
    return <h2>Cargando empanada...</h2>;
  }

  // Error
  if (!empanada.id) {
    return <h2>Empanada no encontrada</h2>;
  }

  return (

    <div style={{ padding: '20px' }}>

      <h1>{empanada.nombre}</h1>

      <img
        src={empanada.foto}
        alt={empanada.nombre}
        width="300"
      />
      <br />  <br />
      Precio: {empanada.precio}$<br />  <br />
      <pre style={{fontSize:"1.2rem", whiteSpace: "pre-wrap"  }}>
      {empanada.detalles}
      </pre>
{/* 
      <p>
        <strong>Género:</strong> {movie.genero}
      </p>

      <p>
        <strong>Año:</strong> {movie.anio}
      </p>

      <p>
        <strong>Duración:</strong> {movie.duracion}
      </p>

      <p>
        <strong>Descripción:</strong>
      </p>

      <p>{movie.descripcion}</p>

*/}

    </div>
  );
}

export default MovieDetail;