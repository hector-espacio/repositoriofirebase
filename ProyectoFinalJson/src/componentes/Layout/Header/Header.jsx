import { Link } from "react-router-dom";
import styles from './Header.module.css';

// 1. Importamos nuestro custom Hook
import { useCart } from '../../../context/CartContext';

function Header() {

  // 2. Extraemos tanto getCartQuantity como getCartTotal del contexto
  const { getCartQuantity, getCartTotal } = useCart();
  
  const totalItems = getCartQuantity();
  const totalPrice = getCartTotal(); // Guardamos el precio total acumulado

  return (
    <header className={styles.header}>
      <h1><span style={{ color: "var(--color-texto)" }}>Tus </span><span style={{ color: "var(--color-logo)" }}>Empanadas</span></h1>

      <nav>
        <ul className={styles.navList}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li>
            <Link to="/carrito">
              Carrito {totalItems > 0 && <span>({totalItems}u. {totalPrice}$ total)</span>} 
            </Link>
          </li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/nuevo-producto">Nuevo Producto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
