import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';

function Item({ id, nombre, precio, stock, foto }) {
    const { addToCart, getCantidadActual } = useCart();
    
    // 1. Averiguamos reactivamente cuánto hay en el carrito global
    const cantidadEnCarrito = getCantidadActual(id);

    // 2. Estado local que controla el número visible en la pantalla.
    // Arranca con lo que ya está en el carrito para mantener la persistencia.
    const [cantidad, setCantidad] = useState(cantidadEnCarrito);

    // 3. SOLUCIÓN AL BUG DEL PDF: 
    // Si el usuario sale de la sección y vuelve, o si el carrito se limpia,
    // este efecto actualiza el estado local con la realidad del carrito.
    useEffect(() => {
        setCantidad(cantidadEnCarrito);
    }, [cantidadEnCarrito]);

    // 4. Funciones incrementar/decrementar integradas en el Item
    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1); // Cambia el número en pantalla al instante
        }
    };

    const decrementar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1); // Cambia el número en pantalla al instante
        }
    };

    // 5. Envío definitivo al carrito
    const handleEnviarAlCarrito = () => {
        // Creamos el objeto del producto
        const producto = { id, nombre, precio, stock, foto };
        
        // Enviamos la cantidad final seleccionada al contexto global
        addToCart(producto, cantidad);
        
        alert(`Carrito actualizado: Ahora tenés ${cantidad} unidades de ${nombre}.`);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px', textAlign: 'center' }}>
            <img src={foto} alt={nombre} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Stock disponible: {stock}</p>

            {/* Bloque del Contador (absorbido aquí, ya sin usar Contador.jsx) */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', margin: '15px 0' }}>
                <button onClick={decrementar} style={{ padding: '5px 10px' }}>-</button>
                
                {/* 
                  Mostramos la variable 'cantidad' local. Esto soluciona la congelación visual:
                  el usuario ve cambiar el número (0, 1, 2, 3...) bajo su dedo en tiempo real.
                */}
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{cantidad}</span>
                
                <button onClick={incrementar} style={{ padding: '5px 10px' }}>+</button>
            </div>

            {/* 
              Botón de Acción: Cambia su texto dinámicamente según el estado.
              Se deshabilita si el número actual en pantalla es igual al que ya está guardado,
              evitando envíos innecesarios o repetidos al carrito.
            */}
            <button 
                onClick={handleEnviarAlCarrito} 
                disabled={cantidad === cantidadEnCarrito}
                style={{
                    padding: '8px 12px',
                    backgroundColor: cantidad === cantidadEnCarrito ? '#ccc' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: cantidad === cantidadEnCarrito ? 'not-allowed' : 'pointer'
                }}
            >
                {cantidadEnCarrito === 0 ? "Añadir al carrito" : "Actualizar cantidad"}
            </button>
        </div>
    );
}

export default Item;