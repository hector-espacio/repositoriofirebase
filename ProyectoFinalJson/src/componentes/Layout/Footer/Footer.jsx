import Directorio from '../../equipo/Directorio';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
    
<div className="container">
<h3 style={{ color: "var(--color-oscurotext)" }}>HORARIOS DE ATENCION</h3>
<h4>MARTES A DOMINGOS:</h4>
Mediodia: 11 a 15 horas<br /> 
Noche: 19 a 23 horas<br />
<br />
<h3 style={{ color: "var(--color-oscurotext)" }}>PEDIDOS Y CONTACTO</h3>
Dirección: Av. Corrientes 1234, CABA<br /> 
WhatsApp: +54 11 4444-5555<br /> 
<br /> 
{/*
        <h5 className="mb-3">Nuestro equipo</h5>
        <Directorio />
 */}
        <hr />

      <p>© 2026 Tienda Tus Empanadas</p>
      </div>
    </footer>
  );
}

