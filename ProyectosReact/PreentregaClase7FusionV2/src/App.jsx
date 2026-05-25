import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./componentes/Layout/Layout";

import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

import FormularioContainer from "./componentes/formulario/FormularioContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<><h1>Bienvenidos a mi Página</h1><br /><br /></>} />
        <Route path="/productos" element={<ItemListContainer Mensaje="Productos Destacados" />}/>
        <Route path="/nuevo-producto" element={<FormularioContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
