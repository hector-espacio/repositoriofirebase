import { SaludoPersonalizado } from "./componentes/SaludoPersonalizado";
import { SaludoTradicional } from "./componentes/SaludoTradicional";
import { EtiquetaColorida } from "./componentes/EtiquetaColorida";
import { ContenedorTexto } from "./componentes/ContenedorTexto";
import { InfoUsuario} from "./componentes/InfoUsuario";

function App() {
  const datosUsuario = { nombre: "Ana", edad: 25, profesion: "Developer" };

  return (
    <main>
      <SaludoPersonalizado nombre="Lucas" ciudad="Madrid" />
      <hr />
      <SaludoTradicional usuario="Gaston" />
      <hr />
      <EtiquetaColorida texto="Este es un texto azul por defecto" />
      <hr />
      <EtiquetaColorida texto="Este es un texto rojo" color="red" />
      <hr />
      <ContenedorTexto>
        <p>Este párrafo es el children del contenedor.</p>
      </ContenedorTexto>
      <hr />
      <InfoUsuario {...datosUsuario} />
      <hr />
    </main>
  );
};

export default App;