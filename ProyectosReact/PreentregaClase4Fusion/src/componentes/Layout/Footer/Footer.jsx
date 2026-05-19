export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Tienda React</p>
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