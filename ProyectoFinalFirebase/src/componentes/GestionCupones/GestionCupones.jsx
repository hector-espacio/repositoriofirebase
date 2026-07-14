// src/componentes/Gestion/GestionCupones.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, doc, deleteDoc, addDoc } from "firebase/firestore";

const GestionCupones = () => {
    const [cupones, setCupones] = useState([]);
    const [nuevoCupon, setNuevoCupon] = useState({ codigo: "", descuento: 0 });

    const fetchCupones = async () => {
        const cuponesRef = collection(db, "cupones");
        const resp = await getDocs(cuponesRef);
        setCupones(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        fetchCupones();
    }, []);

    const handleAgregar = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "cupones"), {
                codigo: nuevoCupon.codigo,
                descuento: Number(nuevoCupon.descuento)
            });
            setNuevoCupon({ codigo: "", descuento: 0 });
            fetchCupones();
        } catch (error) {
            console.error("Error al agregar cupón:", error);
        }
    };

    const handleEliminar = async (id) => {
        if (!window.confirm("¿Eliminar este cupón?")) return;
        try {
            await deleteDoc(doc(db, "cupones", id));
            setCupones(cupones.filter(c => c.id !== id));
        } catch (error) {
            console.error("Error al eliminar:", error);
        }
    };

    return (
        <div>
            <h2>Gestión de Cupones</h2>
            <form onSubmit={handleAgregar}>
                <input 
                    placeholder="Código (ej: DESC10)"
                    value={nuevoCupon.codigo}
                    onChange={(e) => setNuevoCupon({...nuevoCupon, codigo: e.target.value})}
                />
                <input 
                    type="number"
                    placeholder="Descuento (%)"
                    value={nuevoCupon.descuento}
                    onChange={(e) => setNuevoCupon({...nuevoCupon, descuento: e.target.value})}
                />
                <button type="submit">Agregar Cupón</button>
            </form>

            <ul>
                {cupones.map((c) => (
                    <li key={c.id}>
                        {c.codigo} - {c.descuento}% 
                        <button onClick={() => handleEliminar(c.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GestionCupones;