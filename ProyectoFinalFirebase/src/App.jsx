import { Routes, Route } from "react-router-dom";

import Layout from "./componentes/Layout/Layout";


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
import Registro from "./componentes/Registro/Registro";
import ProtectedRoute from "./componentes/ProtectedRoute/ProtectedRoute";



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



        <Route path="/login" element={<Login />} />

        <Route path="/registro" element={<Registro />} />


        <Route path="/cupones" element={
           
          <GestionCupones />} />
      
           
           
        <Route
          path="/gestion"
          element={
            <ProtectedRoute rolesPermitidos={['admin']}>
              <Gestion />
            </ProtectedRoute>
          }
        />
      
      <Route
        path="*"
        element={<h1>404 - Página no encontrada</h1>}
      />


      


    </Route>

    </Routes >
  );
}

export default App;