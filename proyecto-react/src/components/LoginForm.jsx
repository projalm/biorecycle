import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DJANGO from "../utils/DJANGO";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    const body = { email: email, password: password };

    DJANGO.post("/auth/login/", body)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", "Token" + res.data.jwt);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form className="container mt-5 mb-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <div id="emailHelp" className="form-text">
            Nunca compartiremos tu informacion con alguien mas.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Recordar
          </label>
        </div>
        <div className="d-flex">
          <a href="catalogo.html">
            <button
              type="button"
              className="boton-verde text-light fw-bold mt-3 me-5"
              onClick={login}
            >
              Iniciar
            </button>
          </a>
          <div>
            <p className="mt-3 me-2">¿Aun no tienes cuenta?</p>
          </div>
          <a href="registro.html">
            <button
              type="button"
              className="boton-verde text-light fw-bold mt-3"
            >
              Registrar
            </button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
