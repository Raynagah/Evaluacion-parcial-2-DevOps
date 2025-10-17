import { Routes, Route } from "react-router-dom";
import Home from "./componentes/paginas/Home";
import Descripcion from "./componentes/paginas/Descripcion";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Descripcion />} />
    </Routes>
  );
}
