import { useEffect, useState } from "react";
import { obtenerRecetas, eliminarReceta } from "../services/recetaService";
import RecetaCard from "../components/RecetaCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [recetas, setRecetas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchRecetas();
    }, []);

    const fetchRecetas = async () => {
        try {
            const data = await obtenerRecetas();
            setRecetas(data);
        } catch (error) {
            console.error("Error al obtener recetas:", error);
        }
    };

    const handleEliminar = async (id) => {
        const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar esta receta?");
        if (confirmacion) {
            try {
                await eliminarReceta(id);
                // Actualizar la lista de recetas después de eliminar
                setRecetas(recetas.filter(receta => receta._id !== id));
            } catch (error) {
                console.error("Error al eliminar receta:", error);
            }
        }
    };

    return (
        <div className="container mx-auto p-6 mt-10">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl text-gray-900 font-bold mb-6 text-center">Lista de Recetas</h1>
                <button
                    onClick={() => navigate("/crear")}
                    className="mb-6 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
                >
                    Crear Nueva Receta
                </button>
                {recetas.length === 0 ? (
                    <p className="text-gray-900">No hay recetas disponibles. ¡Crea una nueva receta!</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                        {recetas.map((receta) => (
                            <RecetaCard key={receta._id} receta={receta} onEliminar={handleEliminar} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
