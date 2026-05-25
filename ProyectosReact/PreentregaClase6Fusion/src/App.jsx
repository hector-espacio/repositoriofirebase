import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import Layout from "./componentes/Layout/Layout";
import FormularioContainer from './componentes/formulario/FormularioContainer';

function App() {
  return (
    <Layout>
         <h1>¡Bienvenidos a mi página!</h1>
      <ItemListContainer Mensaje="Productos Destacados" />
      <br />
      <hr />
      <FormularioContainer />
    </Layout>
  );
}

export default App;
