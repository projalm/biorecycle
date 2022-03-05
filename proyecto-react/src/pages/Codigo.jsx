import React from "react";
import "../../src/assets/styles/codigo.css";

const Codigo = () => {
  return (
    <div>
      <main className="container text-secondary text-center">
        <h1 className="pt-5">Canje de puntos exitoso!</h1>
        <div className="text-center">
          <img
            src={process.env.PUBLIC_URL + "/images/perfil.jfif"}
            className="logo-curso mt-2 mb-2"
            alt=""
          />
          <div>
            <h3>Juan Pablo Mendez Rivas</h3>
          </div>
          <div>
            <p>Puntos acumulados</p>
            <p className="fw-bold">1410pts</p>
          </div>
        </div>
        <div>
          <h3>Tu codigo es:</h3>
          <h1>DSK4-SD5W4-D45SQ</h1>
        </div>
        <div>
          <h2>¿Deseas seguir canjeando tus puntos por más cupones?</h2>
          <a href="catalogo.html">
            <button
              type="button"
              className="boton-verde text-light fw-bold mt-3 mb-5"
            >
              Canjear
            </button>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Codigo;
