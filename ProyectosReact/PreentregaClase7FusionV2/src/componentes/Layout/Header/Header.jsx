import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <h1>Tienda React</h1>

      <nav>
        <ul style={styles.navList}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/nuevo-producto">Nuevo Producto</Link></li>          
        </ul>
      </nav>
    </header>
  );
}

export default Header;

const styles = {
  header: {
    backgroundColor: "var(--color-primario)",
    color: "var(--color-blanco)",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  navList: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    gap: "15px"
  }
};
