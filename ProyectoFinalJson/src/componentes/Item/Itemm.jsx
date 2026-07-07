import { Contador } from '../Contador/Contador';

// En /componentes/Item/Item.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';


function Item({ id, nombre, precio, stock, foto }) {

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
        else { return "♡ Favorito"; }
    }



    const producto = { id, nombre, precio, stock, foto };
    const [cantidad, setCantidad] = useState(1);
    
    // Lógica del Carrito
    const { addToCart,getCantidadActual } = useCart(); // Traemos la función del contexto

    const cantidadActual = getCantidadActual(producto.id);


    const handleAddToCart = () => {
        addToCart(producto, cantidad);
        alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
    };




    return (

        <div style={{ padding: '20px', border: '1px solid black', fontSize: '1.2rem', width: '250px' }}>
            <Link to={`/productos/${id}`}>

                <img
                    src={foto}
                    alt={nombre}
                    width="200"
                />

                <h3>{nombre}</h3>

            </Link>
            <p>Precio: ${precio}</p>
            <p>Stock disponible: {stock}</p>
            <br />
            <Contador cantidad={cantidad} setCantidad={setCantidad} stock={stock} />

            <br />
            <button onClick={handleAddToCart}>
                Agregar {cantidad} al carrito
            </button>
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
                {imprimirFavorito()}

            </span>

        </div>
    );
    //⭐☆
}

export default Item;