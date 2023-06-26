import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "../src/Pages/Home/Home";
import RegistroUsuario from "./Components/RegistroUsuario/RegistroUsuario";
import CrearProducto from "./Components/CrearProducto/CrearProducto";
import DetalleProducto from "./Components/Detalle/detalle-producto";
import Resultados from "./Components/Categorias/Resultados";
import CrearCategoria from "./Components/Categorias/Categorias";
import Eliminar from "./Components/Eliminar/EliminarVehiculo";
import Panel from "./Components/Panel/Panel";
import Login from "./Components/Login/Login";
import IniciarSesion from "./Components/IniciarSesion/IniciarSesion";
import Cerrar from "./Components/Cerrar/cerrar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
        <Route path="/CrearProducto" element={<CrearProducto />} />
        <Route path="/detalle-producto/:id" element={<DetalleProducto />} />
        <Route path="/resultados/:categoria" element={<Resultados />} />
        <Route path="/CrearCategoria" element={<CrearCategoria />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
        <Route path="/Panel" element={<Panel />} />
        <Route path="Eliminar" element={<Eliminar />} />
        * <Route path="Panel" element={<Panel />} />
        <Route path="/Eliminar" element={<Eliminar />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/InicioSesion" element={<Login />} />
        <Route path="/Cerrar" element={<Cerrar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
