import React from "react";

const Perfil = () => {
  return (
    <div>
      <main className="text-light" style={{ backgroundColor: "#413838" }}>
        <div className="text-center">
          <img className="foto-perfil mt-5" src="img/perfil.jpg" alt="" />
          <div>
            <h3>Nombre</h3>
          </div>
          <div>
            <p>Puntos acumulados</p>
          </div>
          <a href="catalogo.html">
            <button type="button" className="boton-verde text-light fw-bold ">
              Canjear
            </button>
          </a>
          <div className="mt-3">
            <p>Centro de acopio preferido</p>
          </div>
        </div>
        <div>
          <form className="container">
            <fieldset disabled>
              <legend>Nombres</legend>
              <div className="mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="Jose Alejandro"
                />
              </div>
              <legend>Apellidos</legend>
              <div className="mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="Leon Martinez"
                />
              </div>
              <legend>Correo</legend>
              <div className="mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="correo@correo.com"
                />
              </div>
              <legend>Direccion</legend>
              <div className="mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="Direccion"
                />
              </div>
              <legend>Estado</legend>
              <div className="mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="Lima"
                />
              </div>
              <legend>Cuidad</legend>
              <div className="mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="Lima"
                />
              </div>
              <legend>Telefono</legend>
              <div className="mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder={+51123456}
                />
              </div>
              <fieldset></fieldset>
            </fieldset>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Perfil;
