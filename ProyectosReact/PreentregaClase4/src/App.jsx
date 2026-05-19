import './App.css'
import { Contador } from './componentes/Contador/Contador'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'


function App() {

  return (
    <>
      <h1>¡Bienvenidos a mi página!</h1>
      <ItemListContainer Mensaje="Productos Destacados" />
    </>
  )
}

export default App