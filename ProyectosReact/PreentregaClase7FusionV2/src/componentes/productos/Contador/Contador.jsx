import { useState } from 'react';

export function Contador() {

    //const [NombreVariable, NombrefunciónCambiaEstado] = useState(valor Inicial)
    const [contador, setContador] = useState(0);

    

    const incrementar = () => {
        setContador(contador + 1); //¡Usamos la función para actualizar el estado!
    };

const decrementar = () => {
    if (contador > 0) {
        setContador(contador - 1);
    }
};

    return (
        <div>
            
            <button style={ { marginRight: '5px'  } } onClick={incrementar}>Añadir</button> 
            <button onClick={decrementar}>Quitar</button>
            <p>Cantidad: {contador}</p>
        </div>
    );

}

