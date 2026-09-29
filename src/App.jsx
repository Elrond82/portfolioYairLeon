import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Estudios from "./pages/Estudios";
import Certificados from "./pages/Certificados";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="estudios" element={<Estudios />} />
          <Route path="certificados" element={<Certificados />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
