export default function Header() {
  return (
    <header style={styles.header}>
      <h1>Tienda React</h1>

      <nav>
        <ul style={styles.navList}>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Carrito</a></li>
        </ul>
      </nav>
    </header>
  );
}

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
