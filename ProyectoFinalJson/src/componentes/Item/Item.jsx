import { useState } from 'react';
import { useCart } from '../../context/CartContext';

import { Link } from 'react-router-dom';


function Item({ id, nombre, precio, stock, foto }) {
    const { addToCart, getCantidadActual } = useCart();

    // 1. Contador local interactivo: Siempre arranca en 0 para una nueva selección.
    // Así el usuario no tiene que andar restando para volver a comprar.
    const [cantidad, setCantidad] = useState(0);

    // 2. Información visual NO interactiva (viene del contexto global)
    const cantidadEnCarrito = getCantidadActual(id);

    // 3. Calculamos el stock real disponible para que no agregue de más
    const stockDisponible = stock - cantidadEnCarrito;

    const incrementar = () => {
        if (cantidad < stockDisponible) {
            setCantidad(cantidad + 1);
        }
    };

    const decrementar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    const handleEnviarAlCarrito = () => {
        if (cantidad === 0) return;

        const producto = { id, nombre, precio, stock, foto };

        // Enviamos la nueva tanda seleccionada al carrito
        addToCart(producto, cantidad);

        alert(`Agregaste ${cantidad} unidades más de ${nombre}.`);

        // REINICIALIZACIÓN: El contador vuelve a 0 inmediatamente 
        // listo para una futura nueva carga
        setCantidad(0);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px', textAlign: 'center' }}>

            <Link to={`/productos/${id}`}>

                <img src={foto} alt={nombre} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                <h3>{nombre}</h3>
            </Link>

            <p>Precio: ${precio}</p>

            {/* Control Interactivo: Muestra la cantidad que se va a añadir AHORA */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', margin: '15px 0' }}>
                <button onClick={decrementar} style={{ padding: '5px 10px', fontSize: "1.5rem", background: "black", color: "white"  }}>-</button>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{cantidad}</span>
                <button onClick={incrementar} style={{ padding: '5px 10px', fontSize: "1.5rem", background: "black", color: "white"  }}>+</button>
            </div>

            {/* INFORMACIÓN VISUAL NO INTERACTIVA: El texto que me indicabas */}
            {cantidadEnCarrito > 0 && (
                <p style={{ color: '#0a4c1a', fontSize: '0.9rem', margin: '10px 0' }}>
                    • Ya tenés {cantidadEnCarrito} en el carrito
                </p>
            )}

            {/* Botón de envío: Solo se activa si el contador local es mayor a 0 */}
            <button
                onClick={handleEnviarAlCarrito}
                disabled={cantidad === 0}
                style={{
                    padding: '8px 12px',
                    backgroundColor: cantidad === 0 ? '#4f6781' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: cantidad === 0 ? 'not-allowed' : 'pointer'
                }}
            >
                Añadir al carrito
            </button>
        </div>
    );
}

export default Item;
