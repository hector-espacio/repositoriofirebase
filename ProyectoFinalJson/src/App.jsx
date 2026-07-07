import { Routes, Route } from "react-router-dom";

import Layout from "./componentes/Layout/Layout";

import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

import FormularioContainer from "./componentes/formulario/FormularioContainer";

import Cart from './componentes/Cart/Cart';

import Directorio from './componentes/equipo/Directorio';

import Detail from "./componentes/Detail/Detail";

import Inicio from "./componentes/Inicio/Inicio";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<><Inicio /></>} />
        <Route path="/productos" element={<ItemListContainer destacados={false} />} />

        <Route path="/nosotros" element={
          <>
            <h2 style={{ textAlign: "center" }}>Nuestro equipo</h2>
            <br />
            <Directorio />
          </>} />


        <Route path="/nuevo-producto" element={<FormularioContainer />} />

        <Route
          path="/productos/:id"
          element={<Detail />}
        />
        <Route path="/carrito" element={<Cart />} />

        <Route
          path="*"
          element={<h1>404 - Página no encontrada</h1>}
        />


      </Route>

    </Routes>
  );
}

export default App;
