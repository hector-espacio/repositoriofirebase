import styles from "./TarjetaProducto.module.css";

export default function TarjetaProducto({ imagen, nombre, precio }) {
  return (
    <div className={styles.card}>
      <img src={imagen} alt={nombre} className={styles.image} />
      <h3>{nombre}</h3>
      <p className={styles.price}>${precio}</p>
    </div>
  );
}