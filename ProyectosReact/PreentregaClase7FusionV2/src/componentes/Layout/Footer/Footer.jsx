import Directorio from '../../equipo/Directorio';


export default function Footer() {
  return (
    <footer style={styles.footer}>
    
<div className="container">

        <h5 className="mb-3">Nuestro equipo</h5>
        <Directorio />

        <hr />

      <p>© 2026 Tienda React</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "var(--color-secundario)",
    color: "var(--color-blanco)",
    textAlign: "center",
    padding: "15px"
  }
};