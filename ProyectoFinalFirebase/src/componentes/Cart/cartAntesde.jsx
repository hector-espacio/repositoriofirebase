// src/components/Cart/Cart.jsx
import React from 'react';
import { useCart } from '../../context/CartContext'; // 1. Importamos el hook
const Cart = () => {
 // 2. Obtenemos el estado 'cart' y las funciones que necesitemos del contexto
 const { cart, clearCart, getCartTotal } = useCart();
 // Si el carrito está vacío, mostramos un mensaje
 if (cart.length === 0) {
       
return (
<div>
<h1>El carrito está vacío</h1>
<p>Agrega productos para continuar la compra.</p>
</div>
);
}
 // Si hay productos, los mostramos
 return (
 <div style={{padding: "10px"}}>
<h1>Carrito de Compras</h1>
<br />
 {cart.map(item => (
  <div key={item.id} className="cart-item">
 <h4>{item.nombre}</h4>
 <p>Cantidad: {item.quantity}</p>
 <p>Precio unitario: ${item.precio}</p>
 <p>Subtotal: ${item.precio * item.quantity}</p>
 <br />
 </div>
))}
 <hr style={{marginBottom: "5px"}} />
 
 <h3 style={{}}>Total a pagar: ${getCartTotal()}</h3>
 
 <br />
  <button onClick={clearCart} style={{padding: "5px"}}>Vaciar Carrito</button>
 </div>
 );
};
export default Cart;