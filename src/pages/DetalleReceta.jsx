import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerRecetaPorId, eliminarReceta } from "../services/recetaService";
import { useNavigate } from "react-router-dom";

const DetalleReceta = () => {
    const { id } = useParams();
    const [receta, setReceta] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReceta = async () => {
            const data = await obtenerRecetaPorId(id);
            setReceta(data);
        };
        fetchReceta();
    }, [id]);

    const handleEliminar = async () => {
        await eliminarReceta(id);
        navigate("/");
    };

    if (!receta) return <p className="text-center mt-10 text-gray-900">Cargando...</p>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
            <h1 className="text-3xl text-gray-900 font-bold mb-4 text-center">{receta.titulo}</h1>
            <p className="mb-2 text-gray-900"><span className="font-semibold">Ingredientes:</span> {receta.ingredientes.join(", ")}</p>
            <p className="mb-2 text-gray-900"><span className="font-semibold">Instrucciones:</span> {receta.instrucciones}</p>
            <p className="mb-2 text-gray-900"><span className="font-semibold">Calorías:</span> {receta.calorias}</p>
            <p className="mb-4 text-gray-900"><span className="font-semibold">Tiempo:</span> {receta.tiempoPreparacion} min</p>
        </div>
    );
};

export default DetalleReceta;
