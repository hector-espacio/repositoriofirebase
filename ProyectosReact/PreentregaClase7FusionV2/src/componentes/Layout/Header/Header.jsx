import styles from "./Header.module.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Tienda React ok</h1>

      <nav>
        <ul className={styles.navList}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/nuevo-producto">Nuevo Producto</Link></li>  
          <li><Link to="/Nosotros">Nosotros</Link></li>        
        </ul>
      </nav>
    </header>
  );
}

export default Header;

