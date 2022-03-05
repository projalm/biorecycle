import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PRODUCT from "../utils/PRODUCT";

const Municipalidad = () => {
  const [district, setDistrict] = useState([]);

  useEffect(() => {
    PRODUCT.get(`districts?populate=*`).then((res) => {
      setDistrict(res.data.data);
      console.log(res);
    });
  }, []);

  return (
    <div>
      <div className="catalogo">
        <div className="container d-flex">
          <img
            src="img/gobiernoMunicipalidades.png"
            className="imagen-catalogo pt-0 pb-0"
            alt=""
          />
          <h2 className="container text-start text-light lh-lg text-end mt-5">
            Puntos de Acopio - Lima Metropolitana
          </h2>
        </div>
      </div>
      <div className="catalogo-products">
        <div className="texto-catalogo container d-flex justify-content-between pt-5">
          <h2 className="text-light" style={{ width: "50vw" }}>
            Indícanos tu distrito de residencia
          </h2>
          <Link to="/acopio/">
            <button
              type="button"
              style={{
                backgroundColor: "#413838",
                width: "300px",
                height: "60px",
                borderRadius: "10px",
                boxShadow: "5px 5px 5px black",
              }}
              className="boton-verde text-light fw-bold fs-4"
            >
              Buscar
            </button>
          </Link>
        </div>
        <div className="container d-flex flex-row pt-5 pb-5">
          <div className="row row-cols-1 row-cols-md-5 g-4 mt-5 mb-5">
            {district.map((distrito) => {
              return (
                <div className="scroll col pb-5">
                  <div className="card">
                    <img
                      src={
                        "http://localhost:1337" +
                        distrito.attributes.img.data.attributes.url
                      }
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body carta-oscura text-light">
                      <h5 className="card-title">Dirección:</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                      </p>
                      <span>
                        <b>Ref.:</b> Lorem, ipsum dolor.
                      </span>
                      <a href="acopiomap.html">
                        <button
                          type="button"
                          className="boton-verde text-light fw-bold mt-3"
                        >
                          Maps
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center catalogo-products mb-0 pb-5">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Municipalidad;
