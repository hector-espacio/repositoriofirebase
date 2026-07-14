import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

function ItemListContainer( {destacados}) {
  const [empanadas, setEmpanadas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Asegúrate de guardar tu archivo JSON en la carpeta 'public/data/empanadas.json'
    fetch("/data/productos.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo cargar el catálogo de empanadas");
        }
        return res.json();
      })
      .then((data) => setEmpanadas(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Renderizado condicional
  if (loading) return <p>Cargando nuestro menú de empanadas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {
       (!destacados) &&  <h1>🥟 Menú de Empanadas</h1>
      }
      <br />
      <ItemList productos={empanadas} destacados ={destacados} />
    </div>
  );
}

export default ItemListContainer;
