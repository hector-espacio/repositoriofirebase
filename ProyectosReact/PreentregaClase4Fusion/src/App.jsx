import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import Layout from "./componentes/Layout/Layout";

function App() {
  return (
    <Layout>
         <h1>¡Bienvenidos a mi página!</h1>
      <ItemListContainer Mensaje="Productos Destacados" />
    </Layout>
  );
}

export default App;
