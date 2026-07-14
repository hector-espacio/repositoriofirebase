
function FormularioProducto({ datosForm, manejarCambio, manejarCambioImagen, manejarEnvio, cargando, mensajeExito }) {

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '24rem',
        margin: '3rem auto',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        gap: '16px'
    };

    const exitoStyle = {
        color: '#2e7d32',
        backgroundColor: '#e8f5e9',
        padding: '0.5rem',
        borderRadius: '4px',
        textAlign: 'center',
        fontWeight: 'bold'
    };

    const cargandoStyle = {
        color: '#0288d1',
        textAlign: 'center',
        fontStyle: 'italic'
    };

    return (
        <form style={formStyle} onSubmit={manejarEnvio}>
            <h3>Agregar Nuevo Producto (Firebase)</h3>

            {mensajeExito && <div style={exitoStyle}>{mensajeExito}</div>}
            {cargando && <div style={cargandoStyle}>Guardando producto, por favor espera...</div>}

            <div>
                <label>Nombre del Producto:</label>
                <input
                    type="text"
                    placeholder="Ej: Teclado Mecánico"
                    name="nombre"
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                    disabled={cargando}
                    required // Validación básica HTML5
                />
            </div>
            <div>
                <label>Precio: $</label>
                <input
                    type="number"
                    placeholder="Ej: 95"
                    name="precio"
                    value={datosForm.precio}
                    onChange={manejarCambio}
                    disabled={cargando}
                    required
                />
            </div>
            <div>
                <label>Stock:</label>
                <input
                    type="number"
                    placeholder="Ej: 5"
                    name="stock"
                    value={datosForm.stock}
                    onChange={manejarCambio}
                    disabled={cargando}
                    required
                />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                    type="checkbox"
                    id="destacados"
                    name="destacados"
                    checked={datosForm.destacados} 
                    onChange={manejarCambio}
                    disabled={cargando}
                />
                <label htmlFor="destacados">¿Destacar producto?</label>
            </div>
            <div>
                <label>Detalles:</label>
                <textarea
                    placeholder="Escribe una descripción detallada del producto..."
                    name="detalles"
                    value={datosForm.detalles}
                    onChange={manejarCambio}
                    disabled={cargando}
                    style={{ width: '100%', minHeight: '80px', resize: 'vertical' }}
                />
            </div>

            <div>
                <label>Imagen:</label>
                <input
                    type="file"
                    onChange={manejarCambioImagen}
                    disabled={cargando}
                />
            </div>

            <button type="submit" disabled={cargando}>
                {cargando ? "Guardando..." : "Guardar Producto"}
            </button>
        </form>
    );
}

export default FormularioProducto;
