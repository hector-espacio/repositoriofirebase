export const InfoUsuario = ({ nombre, edad, profesion }) => {
  return (
    <p>{nombre} tiene {edad} años y es {profesion}.</p>
  );
};

// Ejemplo de uso:
// const datos = { nombre: "Ana", edad: 25, profesion: "Developer" };
// <InfoUsuario {...datos} />