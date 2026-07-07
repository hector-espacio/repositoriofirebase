// En Contador.jsx
// 1. Recibimos las props desestructuradas
export function Contador({ cantidad, setCantidad, stock }) { 

    const incrementar = () => {
        // Opcional: Validamos que no supere el stock disponible si se lo pasas por prop
        if (cantidad < stock) {
            setCantidad(cantidad + 1); 
        } else if (!stock) { 
            // Si no le pasas stock, que sume libremente
            setCantidad(cantidad + 1);
        }
    };

    const decrementar = () => {
        // Validamos que no baje de 0 (o de 1, según prefieras)
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div>
            <button style={{ marginRight: '5px' }} onClick={incrementar}>Añadir</button> 
            <button onClick={decrementar}>Quitar</button>
            {/* 2. Mostramos la variable que viene del padre */}
            <p>Cantidad: {cantidad}</p> 
        </div>
    );
}
