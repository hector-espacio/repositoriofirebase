import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

// 1. ¡ESTO ES LO NUEVO! Importamos las herramientas de Firebase[span_4](start_span)[span_4](end_span)
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config"; // Nos aseguramos de conectar tu config.js[span_5](start_span)[span_5](end_span)

function ProductosNacionales({ destacados }) {
  const [empanadas, setEmpanadas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 2. Apuntamos a tu colección manual llamada "productos[span_6](start_span)"[span_6](end_span)
    const productosRef = collection(db, "productos");

    // 3. Pedimos los documentos reales de Firebase[span_7](start_span)[span_7](end_span)
    getDocs(productosRef)
      .then((resp) => {
        // Mapeamos los datos para estructurarlos con su ID automático[span_8](start_span)[span_8](end_span)
        const data = resp.docs.map((doc) => {
          return { 
            ...doc.data(), 
            id: doc.id // Firebase usa un ID alfanumérico automático[span_9](start_span)[span_9](end_span)
          };
        });
        setEmpanadas(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Renderizado condicional
  if (loading) return <p>Cargando nuestro menú de empanadas desde Firebase...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {
       (!destacados) &&  <h1>🥟 Menú de Empanadas</h1>
      }
      <br />
      <ItemList productos={empanadas} destacados={destacados} />
    </div>
  );
}

export default ProductosNacionales;