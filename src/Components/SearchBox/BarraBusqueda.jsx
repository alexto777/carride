import { useState } from "react";
import { TextField } from "@mui/material";
import { addMonths, formatISO, isBefore } from "date-fns";
import PropTypes from "prop-types";
import "./BarraBusqueda.css";

const BarraBusqueda = (props) => {
  const { showSearch } = props;
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [brand, setBrand] = useState("");

  const currentDate = new Date();
  const maxDate = addMonths(currentDate, 2);
  const minDate = formatISO(currentDate, { representation: "date" });

  const handlePickupDateChange = (e) => {
    const selectedDate = e.target.value;
    if (isBefore(selectedDate, minDate)) {
      setPickupDate(minDate);
      return;
    }
    setPickupDate(selectedDate);
  };

  const handleReturnDateChange = (e) => {
    const selectedDate = e.target.value;
    if (isBefore(selectedDate, minDate)) {
      setReturnDate(minDate);
      return;
    }
    setReturnDate(selectedDate);
  };

  return (
    <div className="contenedor-barra">
      <div className="barra-busqueda">
        <div className="campo">
          {showSearch && (
            <TextField
              required
              id="marca-selector"
              label="Marca (ej: Mazda, Renault)"
              variant="filled"
              color="success"
              type="text"
              name="marca-selector"
              value={brand}
              className="marca"
              onChange={(e) => setBrand(e.target.value)}
            />
          )}
        </div>
        <div className="campo">
          <TextField
            required
            type="date"
            id="selector-date-retiro"
            label="Fecha Retiro"
            variant="filled"
            color="success"
            focused
            value={pickupDate}
            onChange={handlePickupDateChange}
            inputProps={{
              min: minDate,
              max: formatISO(maxDate, { representation: "date" }),
            }}
          />
        </div>
        <div className="campo">
          <TextField
            required
            type="date"
            id="selector-date-devolucion"
            label="Fecha Devolución"
            variant="filled"
            color="success"
            focused
            value={returnDate}
            onChange={handleReturnDateChange}
            inputProps={{
              min: minDate,
              max: formatISO(maxDate, { representation: "date" }),
            }}
          />
        </div>
        <button className="button">Buscar</button>
      </div>
    </div>
  );
};

BarraBusqueda.propTypes = { showSearch: PropTypes.bool };
BarraBusqueda.defaultProps = { showSearch: true };

export default BarraBusqueda;
