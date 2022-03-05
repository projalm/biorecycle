import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DJANGO from "../utils/DJANGO";

const Canje = () => {
  const { id } = useParams();
  const [elemento, setElemento] = useState();

  useEffect(() => {
    DJANGO.get(`products/${id}/`).then((res) => {
      console.log(res);
      setElemento(res.data);
    });
  }, [id]);

  return (
    <div>
      <main className="container text-secondary">
        <div>
          <h2 className="pt-5 mb-5">
            ¿Desea canjear sus puntos por vales de descuento en este producto?
          </h2>
        </div>
        <div className="d-flex justify-content-between">
          {elemento ? (
            <div className="card mb-5" style={{ width: "18rem" }}>
              <img
                src={"http://127.0.0.1:8000/" + elemento.image}
                className="card-img-top"
                alt="#"
              />
              <div className="card-body">
                <h5 className="card-title text-secondary">{elemento.title}</h5>
                <p className="card-text text-secondary">
                  {elemento.description}
                </p>

                <button
                  type="button"
                  className="boton-verde text-light fw-bold mt-3"
                >
                  Canjear
                </button>
              </div>
            </div>
          ) : (
            <div>Cargando</div>
          )}
          <div className="d-flex flex-column mb-5">
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
                <p className="fw-bold">1567pts</p>
              </div>
            </div>
            <div>
              <h5>Cuantos puntos desea canjear</h5>
            </div>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  1000pts por 5% de descuento
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  2000pts por 10% de descuento
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  4000pts por 20% de descuento
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  6000pts por 35% de descuento
                </label>
              </div>
              <a href="codigo.html">
                <button
                  type="button"
                  className="boton-verde text-light fw-bold mt-3"
                >
                  Canjear
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Canje;
