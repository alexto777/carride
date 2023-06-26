import PropTypes from "prop-types";
import "./Tarjetas.css";
import { Link } from "react-router-dom";

const Tarjeta = ({ carData }) => {
  return (
    <div className="card">
      <img src={carData.url} alt={carData.alt} className="card-image" />
      <div className="card-info">
        <div className="card-field">
          <span className="card-label">Puestos:</span>
          <span className="card-value">{carData.puestos}</span>
        </div>

        <div className="card-field">
          <span className="card-label">Precio:</span>
          <span className="card-value">{carData.precio}</span>
        </div>
        <div className="card-field">
          <span className="card-label">Aire:</span>
          <span className="card-value">{carData.aire}</span>
        </div>

        <div className="card-field">
          <span className="card-label"> Control:</span>
          <span className="card-value">{carData.tipoControl}</span>
        </div>

        <div className="detail-button-container">
          <Link
            to={`/detalle-producto/${carData.id}`}
            className="detail-button"
          >
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

Tarjeta.propTypes = {
  carData: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    puestos: PropTypes.number.isRequired,
    tipoCombustible: PropTypes.string.isRequired,
    precio: PropTypes.string.isRequired,
    aire: PropTypes.string.isRequired,
    numeroPuertas: PropTypes.number.isRequired,
    tipoControl: PropTypes.string.isRequired,
    modelo: PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
    marca: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired, // Agrega esta línea
  }).isRequired,
};

export default Tarjeta;
