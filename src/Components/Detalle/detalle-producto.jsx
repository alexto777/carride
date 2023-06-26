import { useParams } from "react-router-dom";
import ImageBlock from "./ImageBlock";
import product from "./product.json";
import { Typography } from "@mui/material";
import "./DetalleProducto.css";
import "@mui/icons-material";
import Disponibilidad from "../Reserva/Disponibilidad";

const DetalleProducto = () => {
  const { id } = useParams();

  // Buscar el producto en el array de carros por ID
  const producto = product.find((car) => car.id === id);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const { title, images, caracteristicas } = producto;

  const handleViewMore = () => {
    console.log("Ver Más");
  };

  return (
    <div className="contenedor-imagen">
      <Typography variant="h2">{title}</Typography>
      <ImageBlock
        images={images}
        onViewMore={handleViewMore}
        caracteristicas={caracteristicas}
      />
      <Disponibilidad />
    </div>
  );
};

export default DetalleProducto;
