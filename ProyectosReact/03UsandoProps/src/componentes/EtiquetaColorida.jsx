export const EtiquetaColorida = ({ texto, color = "blue" }) => {
  return (
    <span style={{ color: color }}>
      {texto}
    </span>
  );
};