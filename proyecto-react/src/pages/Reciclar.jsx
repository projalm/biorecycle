import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PRODUCT from "../utils/PRODUCT";

const materiales = [
  {
    tittle: "Papel",
    id: 1,
  },
  {
    tittle: "Vidrio",
    id: 2,
  },
  {
    tittle: "Plastico",
    id: 3,
  },
];

const Reciclar = () => {
  const [material, setMaterial] = useState(materiales[0]);

  const [filtro, setFiltro] = useState();

  useEffect(() => {
    PRODUCT.get(`materials/${material.id}?populate=*`).then((res) => {
      setFiltro(res.data.data);
      console.log(res);
    });
  }, [material]);

  return (
    <div>
      <main className="container">
        <div className="pt-5">
          <h2 className="text-secondary">Que desea reciclar</h2>
        </div>
        <div className="mt-3 mb-5">
          {materiales.map((material) => {
            return (
              <a key={material.id} href="#">
                <button
                  type="button"
                  className="boton-verde text-light fw-bold mt-3 me-3"
                  onClick={() => setMaterial(material)}
                >
                  {material.tittle}
                </button>
              </a>
            );
          })}
        </div>
        {console.log(filtro)}
        <div className="d-flex">
          {filtro ? (
            <div className="card mb-5" style={{ width: "18rem" }}>
              <img
                src={
                  "http://localhost:1337" +
                  filtro.attributes.img.data.attributes.url
                }
                className="card-img-top"
                alt="#"
              />
              <div className="card-body">
                <h5 className="card-title text-secondary">
                  {filtro.attributes.tittle}
                </h5>
                <p className="card-text text-secondary">
                  {filtro.attributes.description}
                </p>
                <Link to={"/municipalidad/"}>
                  <button
                    type="button"
                    className="boton-verde text-light fw-bold mt-3"
                  >
                    Reciclar
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div>Cargando</div>
          )}

          <div className="text-end">
            <div className="d-flex flex-column">
              <h3 className="text-secondary">
                Apoye al ambiente y reciba codigos en descuentos en articulos de
                nuestra pagina
              </h3>
            </div>
            <Link to={"/municipalidad/"}>
              <button
                type="button"
                style={{
                  backgroundColor: "#413838",
                  width: "200px",
                  height: "80px",
                  borderRadius: 0,
                }}
                className="boton-verde text-light fw-bold fs-4 mt-5"
              >
                Reciclar
              </button>
            </Link>
          </div>
        </div>
        <div>
          <h3 />
        </div>
      </main>
    </div>
  );
};

export default Reciclar;
