import Layout from "./componentes/Layout/Layout";
import TarjetaProducto from "./componentes/TarjetaProducto/TarjetaProducto";

function App() {
  return (
    <Layout>
      <h2>Productos destacados</h2>

      <div className="productos-container">
        <TarjetaProducto
          imagen="./src/assets/hero.png"
          nombre="Producto 1"
          precio={100}
        />

        <TarjetaProducto
          imagen="./src/assets/hero.png"
          nombre="Producto 2"
          precio={250}
        />

        <TarjetaProducto
          imagen="./src/assets/hero.png"
          nombre="Producto 3"
          precio={300}
        />
      </div>
    </Layout>
  );
}

export default App;