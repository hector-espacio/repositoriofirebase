import Item from "../Item/Item";

function ItemList({ productos, destacados }) {

    const destacando = productos.filter((elemento) => elemento.destacados);

    if (productos.length === 0) {
        return <p>No hay empanadas disponibles</p>;
    }
let eleccion = productos;

if (destacados){ eleccion = destacando};


    return (
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {eleccion.map(prod => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
}

export default ItemList;