import "./Header.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Logo />
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="mostrar-menu">
        &#8801;
      </label>
      <div className="contenedor-menu">
        <nav className="menu">
          <Link to="/InicioSesion" className="boton">
            Iniciar sesión
          </Link>
          <Link to="/RegistroUsuario" className="boton">
            Crear cuenta
          </Link>
          <label htmlFor="check" className="esconder-menu">
            &#215;
          </label>
        </nav>
      </div>
    </header>
  );
}

export default Header;
