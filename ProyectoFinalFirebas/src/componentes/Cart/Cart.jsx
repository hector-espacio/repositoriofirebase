import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación

const Cart = () => {
    const { cart, clearCart, getCartTotal, removeItem } = useCart();

    // CONDICIONAL: Si el carrito está vacío, mostramos un mensaje y un botón para volver
    if (cart.length === 0) {
        return (
            <div style={{ padding: "10px" }}>
                <h1>El carrito está vacío</h1>
                <br />
                <p>Agregá productos para continuar la compra.</p>
                <br />
                <Link to="/productos" className="btn-volver">
                    Ver Productos
                </Link>
            </div>
        );
    }

    // Si hay productos, los mostramos con las opciones de finalizar y vaciar
    return (
        <div style={{ padding: "10px", textAlign: "center" }}>
            <h1>Carrito de Compras</h1>
            <br />
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <h3 style={{marginBottom: '5px'}}>{item.nombre}</h3>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio unitario: ${item.precio}</p>
                    <p>Subtotal: ${item.precio * item.quantity}</p>
                    {/* 2. AGREGAMOS EL BOTÓN ACÁ (Usando arrow function para pasarle el ID) */}
                    <button style={{margin:"10px 0px", padding: "5px"}} onClick={() => removeItem(item.id)}>
                        Eliminar producto
                    </button>
                    <br />
                    <br />
                    
                </div>
            ))}
            <hr style={{marginBottom: '15px'}}/>
            <h3>Total a pagar: ${getCartTotal()}</h3>

            <button onClick={clearCart} style={{margin:"10px 0px", padding: "5px"}} >
                Vaciar Carrito
            </button>
            <br />
            <br />
            <Link to="/" onClick={() => {alert("Gracias por comprar"); clearCart()}} style={{ borderRadius: '10px',  border: "solid 1px black", margin:"10px 0px", padding: "10px 10px"}} >
                Finalizar Compra
            </Link>
            <br />
            <br />
        </div>
    );
};

export default Cart;