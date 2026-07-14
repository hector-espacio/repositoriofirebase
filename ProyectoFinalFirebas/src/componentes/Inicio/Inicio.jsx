// Usar ItemListContainer para el caso json
//import ItemListContainer from '../ItemListContainer/ItemListContainer';

import ProductosNacionales from "../ProductosNacionales/ProductosNacionales";

function Inicio() {

    const heroStyle = {
        backgroundColor: '#222',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        width:'100%'
      };

    return (
        <>

            <section style={heroStyle}>
                  <h1 style={{ fontSize: '3rem', paddingBottom: "20px" }}  >
                    Descubrí las mejores empanadas
                </h1>
                <img src="https://i.ibb.co/gZF2BZkY/muchasempanadas.jpg" width="90%"/>

              

            </section>

            <section style={{ padding: '20px' }}>
                <center>
                    <h1 style={{ fontSize: '2.5rem' }}>⭐ Empanadas destacadas</h1>

                </center>
                <ProductosNacionales destacados={true} />

            </section>

        </>
    );
}

export default Inicio;