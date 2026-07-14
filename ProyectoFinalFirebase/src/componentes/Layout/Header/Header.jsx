import { Link } from "react-router-dom";
import styles from './Header.module.css';

// 1. Importamos nuestro custom Hook
import { useCart } from '../../../context/CartContext';
import { useAuth } from '../../../context/AuthContext';



function Header() {

const { user, logout } = useAuth();

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

          {/* Lógica de renderizado condicional */}
          {user ? (
            <>{/* Mostrar Gestion SOLO si el usuario es admin */}
              {user.rol === 'admin' && (
                <li><Link to="/gestion" style={{ color: 'black' }}>Gestion</Link></li>)}
              <span>¡Hola, {user.email}!</span>
              <button onClick={logout}>Cerrar Sesión</button>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}


          <li><Link to="/admin/cupones">Gestionar Cupones</Link></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
