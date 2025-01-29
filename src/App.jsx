import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CrearReceta from "./pages/CrearReceta";
import DetalleReceta from "./pages/DetalleReceta";
import EditarReceta from "./pages/EditarReceta"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crear" element={<CrearReceta />} />
        <Route path="/detalle/:id" element={<DetalleReceta />} />
        <Route path="/editar/:id" element={<EditarReceta />} /> 
      </Routes>
    </Router>
  );
}

export default App;
