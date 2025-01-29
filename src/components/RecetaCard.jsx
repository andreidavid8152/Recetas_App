import { useNavigate } from "react-router-dom";

const RecetaCard = ({ receta, onEliminar }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col">
            <div className="p-4 flex-1">
                <h2 className="text-xl text-gray-900 font-semibold mb-2">{receta.titulo}</h2>
                <p className="text-gray-900 mb-2"><span className="font-semibold">Categoría:</span> {receta.categoria}</p>
                <p className="text-gray-900 mb-2"><span className="font-semibold">Calorías:</span> {receta.calorias}</p>
                <p className="text-gray-900 mb-4"><span className="font-semibold">Tiempo:</span> {receta.tiempoPreparacion} min</p>
            </div>
            <div className="p-4 flex justify-between">
                <button
                    onClick={() => navigate(`/detalle/${receta._id}`)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200 mr-2"
                >
                    Ver Detalle
                </button>
                <button
                    onClick={() => navigate(`/editar/${receta._id}`)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-200 mr-2"
                >
                    Editar
                </button>
                <button
                    onClick={() => onEliminar(receta._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200"
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default RecetaCard;
