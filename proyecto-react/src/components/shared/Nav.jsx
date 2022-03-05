import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <div className="logo text-center">
        <Link to={"/"}>
          <img
            src={process.env.PUBLIC_URL + "/images/logopng.png"}
            className="img-logo mt-2 mb-2"
            alt=""
          />
        </Link>
      </div>
      <div className="nombre sticky-top border-top border-bottom">
        <nav className="navbar navbar-light container">
          <div className="d-flex">
            <Link to={"/"}>
              <img
                className="logo2 mt-2"
                src={process.env.PUBLIC_URL + "/images/logocortado.png"}
                alt=""
              />
            </Link>
          </div>
          <ul className="nav justify-content-end fw-bold">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-light"
                aria-current="page"
                href="#"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Visión
              </a>
            </li>
            <li className="nav-item">
              <Link to={"/catalogo"} className="nav-link text-light" href="#">
                Canjear
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reciclar" className="nav-link text-light" href="#">
                Reciclar
              </Link>
            </li>
            {localStorage.getItem("token") && (
              <>
                <li className="nav-item">
                  <Link to="/perfil" className="nav-link text-light" href="#">
                    Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link text-light"
                    href="#"
                    onClick={logout}
                  >
                    Salir
                  </Link>
                </li>
              </>
            )}

            {!localStorage.getItem("token") && (
              <>
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link text-light" href="#">
                    Iniciar Sesion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/registro"}
                    className="nav-link text-light"
                    href="#"
                  >
                    Registrarme
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
