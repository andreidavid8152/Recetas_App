import axios from "axios";

const API_URL = "http://localhost:5000/api/recetas";

export const obtenerRecetas = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

export const crearReceta = async (receta) => {
    const res = await axios.post(API_URL, receta);
    return res.data;
};

export const obtenerRecetaPorId = async (id) => {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
};

export const actualizarReceta = async (id, receta) => {
    const res = await axios.put(`${API_URL}/${id}`, receta);
    return res.data;
};

export const eliminarReceta = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
