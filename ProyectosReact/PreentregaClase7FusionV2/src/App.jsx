import { Routes, Route } from "react-router-dom";
import Layout from "./componentes/Layout/Layout";
import Nosotros from "./componentes/Nosotros/Nosotros";
import ItemListContainer from "./componentes/productos/ItemListContainer/ItemListContainer";

import FormularioContainer from "./componentes/formulario/FormularioContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<><h1>Bienvenidos a mi Página</h1><br /><br /></>} />
        <Route path="/productos" element={<ItemListContainer Mensaje="Productos Destacados" />}/>
        <Route path="/nuevo-producto" element={<FormularioContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Route>
    </Routes>
  );
}

export default App;
