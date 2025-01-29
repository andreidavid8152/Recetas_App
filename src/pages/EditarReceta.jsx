// src/pages/EditarReceta.jsx
import { useState, useEffect } from "react";
import { actualizarReceta, obtenerRecetaPorId } from "../services/recetaService";
import { useNavigate, useParams } from "react-router-dom";

const EditarReceta = () => {
    const { id } = useParams();
    const [titulo, setTitulo] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [instrucciones, setInstrucciones] = useState("");
    const [calorias, setCalorias] = useState(0);
    const [categoria, setCategoria] = useState("Desayuno");
    const [tiempoPreparacion, setTiempoPreparacion] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReceta = async () => {
            try {
                const data = await obtenerRecetaPorId(id);
                setTitulo(data.titulo);
                setIngredientes(data.ingredientes.join(", "));
                setInstrucciones(data.instrucciones);
                setCalorias(data.calorias);
                setCategoria(data.categoria);
                setTiempoPreparacion(data.tiempoPreparacion);
            } catch (error) {
                console.error("Error al obtener la receta:", error);
            }
        };
        fetchReceta();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await actualizarReceta(id, {
                titulo,
                ingredientes: ingredientes.split(","),
                instrucciones,
                calorias,
                categoria,
                tiempoPreparacion
            });
            navigate("/");
        } catch (error) {
            console.error("Error al actualizar la receta:", error);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
            <h1 className="text-2xl text-gray-900 font-bold mb-6 text-center">Editar Receta</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Título"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder:text-gray-700"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Ingredientes (separados por comas)"
                        value={ingredientes}
                        onChange={(e) => setIngredientes(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder:text-gray-700"
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Instrucciones"
                        value={instrucciones}
                        onChange={(e) => setInstrucciones(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder:text-gray-700"
                        rows="4"
                    ></textarea>
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Calorías"
                        value={calorias}
                        onChange={(e) => setCalorias(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder:text-gray-700"
                    />
                </div>
                <div>
                    <select
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                    >
                        <option value="Desayuno">Desayuno</option>
                        <option value="Almuerzo">Almuerzo</option>
                        <option value="Cena">Cena</option>
                        <option value="Snack">Snack</option>
                    </select>
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Tiempo (min)"
                        value={tiempoPreparacion}
                        onChange={(e) => setTiempoPreparacion(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder:text-gray-700"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
                    >
                        Actualizar Receta
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditarReceta;
