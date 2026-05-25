import { useState } from "react";
import { Contador } from '../Contador/Contador'

function Item({ nombre, precio, stock }) {

    const [esFavorito, setEsFavorito] = useState(false)
   
    const CompraClick = () => {
        // Quiero que se ejecute cuando le doy clic
        alert(`¡Agregaste ${nombre} al chango!`);
    };
    
    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito)
    }
    
const imprimirFavorito = () => {
            if (esFavorito) { return "❤️ Favorito"; } 
            else { return "No Favorito"; }
        }


    return (

        <div  style={{ padding: '20px', border: '1px solid black', fontSize: '1.2rem' }}>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Stock disponible: {stock}</p>
            <br />
            <Contador />
            <br />
            <button onClick={CompraClick}>Comprar</button>
            <br />
            <span
                style={
                    {
                        cursor: "pointer",
                        marginLeft: "10px"
                    }
                }
                onClick={marcarComoFavorito}
            > 
            <br />
                {  imprimirFavorito() }
          
              </span>

        </div>
    );
    //⭐☆
}

export default Item;