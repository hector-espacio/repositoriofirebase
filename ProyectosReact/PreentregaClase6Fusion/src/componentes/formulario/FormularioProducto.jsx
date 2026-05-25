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

    // Estilos rápidos para los mensajes de feedback
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
            <h3>Agregar Nuevo Producto</h3>
            
            {/* 💡 Si hay mensaje de éxito, lo mostramos en pantalla */}
            {mensajeExito && <div style={exitoStyle}>{mensajeExito}</div>}
            
            {/* 💡 Si está cargando, mostramos un aviso visual */}
            {cargando && <div style={cargandoStyle}>Subiendo imagen, por favor espera...</div>}

            <div>
                <label>Nombre del Producto:</label>
                <input
                    type="text"
                    placeholder="Ej: Teclado Mecánico"
                    name="nombre"
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                    disabled={cargando} // Deshabilitamos mientras carga
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

            {/* 💡 Modificamos el texto del botón y lo bloqueamos si está cargando */}
            <button type="submit" disabled={cargando}>
                {cargando ? "Guardando..." : "Guardar Producto"}
            </button>
        </form>
    );
}

export default FormularioProducto;
