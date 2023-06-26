import { Typography } from "@mui/material";
import BarraBusqueda from "../SearchBox/BarraBusqueda";
import "./Disponibilidad.css";

const Disponibilidad = () => {
  return (
    <div className="disponibilidad">
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Disponibilidad
      </Typography>
      <div className="barra-busqueda-contenedor">
        <BarraBusqueda showSearch={false} />
      </div>
    </div>
  );
};

export default Disponibilidad;
