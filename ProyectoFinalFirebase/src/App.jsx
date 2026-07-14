import { Routes, Route } from "react-router-dom";

import Layout from "./componentes/Layout/Layout";

import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

import FormularioContainer from "./componentes/formularioNacionales/FormularioContainer";

import Cart from './componentes/Cart/Cart';

import Directorio from './componentes/equipo/Directorio';

import Inicio from "./componentes/Inicio/Inicio";

import Detail from "./componentes/Detail/Detail";

import ProductosNacionales from "./componentes/ProductosNacionales/ProductosNacionales";

import ProductosNacionalesDetalle from "./componentes/ProductosNacionalesDetalle/ProductosNacionalesDetalle";

import Gestion from "./componentes/Gestion/Gestion";

import GestionCupones from "./componentes/GestionCupones/GestionCupones";

import Login from "./componentes/Login/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<><Inicio /></>} />

        <Route path="/nosotros" element={
          <>
            <h2 style={{ textAlign: "center" }}>Nuestro equipo</h2>
            <br />
            <Directorio />
          </>} />

        <Route path="/nuevo-producto" element={<FormularioContainer />} />

        <Route path="/productos" element={<ProductosNacionales destacados={false} />} />


        <Route
          path="/productos/:id"
          element={<ProductosNacionalesDetalle />}
        />

        <Route path="/carrito" element={<Cart />} />


        <Route path="/gestion" element={<Gestion />} />

        <Route path="/login" element={<Login />} />

        <Route path="/admin/cupones" element={<GestionCupones />} />

        <Route
          path="*"
          element={<h1>404 - Página no encontrada</h1>}
        />


        {/*
        <Route path="/productos" element={<ItemListContainer destacados={false} />} />
   
        <Route
          path="/productos/:id"
          element={<Detail />}
        />
         */}



      </Route>

    </Routes>
  );
}

export default App;
