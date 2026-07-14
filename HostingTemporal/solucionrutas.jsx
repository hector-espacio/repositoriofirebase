function App() {
  return (
    <Routes>
      {/* Definimos el Layout como una ruta padre */}
      <Route path="/" element={<Layout />}>
        
        {/* Usamos 'index' para la ruta raíz */}
        <Route index element={<Inicio />} />

        <Route path="nosotros" element={
          <>
            <h2 style={{ textAlign: "center" }}>Nuestro equipo</h2>
            <br />
            <Directorio />
          </>
        } />

        <Route path="nuevo-producto" element={<FormularioContainer />} />
        <Route path="productos" element={<ProductosNacionales destacados={false} />} />
        <Route path="productos/:id" element={<ProductosNacionalesDetalle />} />
        <Route path="carrito" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />} />
        <Route path="cupones" element={<GestionCupones />} />

        <Route
          path="gestion"
          element={
            <ProtectedRoute rolesPermitidos={['admin']}>
              <Gestion />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Route> 
      {/* El Route del Layout se cierra AQUÍ, al final */}
    </Routes>
  );
}
