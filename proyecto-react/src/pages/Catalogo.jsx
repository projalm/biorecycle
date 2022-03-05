import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../src/assets/styles/catalogo.css";
import PRODUCT from "../utils/PRODUCT";
import DJANGO from "../utils/DJANGO";

const Catalogo = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    DJANGO.get("products/").then((res) => {
      console.log(res);
      setProductos(res.data);
    });
  }, []);

  // useEffect(() => {
  //   PRODUCT.get("productos?populate=*").then((res) => {
  //     // console.log(res);
  //     setProductos(res.data.data);
  //   });
  // }, []);

  return (
    <div>
      <main>
        <div className="catalogo">
          <div className="container d-flex">
            <img
              src={process.env.PUBLIC_URL + "/images/ayude.jpg"}
              className="main-land mt-2 mb-2"
              alt=""
            />
            <h2 className="container text-start text-light lh-lg text-end mt-5">
              ¡Ayuda al planeta reciclando y recibe descuentos de nuestros
              aliados verdes en excelentes cursos, spas y más!
            </h2>
          </div>
        </div>
        <div className="catalogo-products">
          <div className="texto-catalogo container d-flex justify-content-between pt-5">
            <h2 className="text-light" style={{ width: "50vw" }}>
              ¿Aún no tienes puntos para canjear en nuestros productos? ¿Qué
              esperas?
            </h2>
            <a href="reciclar.html">
              <button
                type="button"
                style={{
                  backgroundColor: "#413838",
                  width: "200px",
                  height: "80px",
                  borderRadius: "20px",
                }}
                className="boton-verde text-light fw-bold fs-4"
              >
                Reciclar
              </button>
            </a>
          </div>
          {console.log(productos)}
          <div className="container d-flex flex-row pt-5 pb-5">
            <div className="row row-cols-1 row-cols-md-5 g-4 mt-5 mb-5">
              {productos.map((producto) => {
                return (
                  <div key={producto.id} className="scroll col pb-5">
                    <div className="card">
                      <img
                        src={"http://127.0.0.1:8000/" + producto.image}
                        className=""
                        alt=""
                      />
                      <div className="card-body carta-oscura text-light">
                        <h5 className="card-title">{producto.title}</h5>
                        <p className="card-text">{producto.description}</p>
                        <span>
                          <h6>150 puntos</h6>
                        </span>
                        <Link to={`/canje/${producto.id}`}>
                          <button
                            type="button"
                            className="boton-verde text-light fw-bold mt-3"
                          >
                            Canjear
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className="col">
                <div className="card">
                  <img
                    src="img/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body carta-oscura text-light">
                    <h5 className="card-title">Resaturante</h5>
                    <p className="card-text">
                      Opte por el precio con despcuento del producto en este
                      grandioso restaurante
                    </p>
                    <span>
                      <b>S/.65</b> -25% descuento
                    </span>
                    <a href="canje.html">
                      <button
                        type="button"
                        className="boton-verde text-light fw-bold mt-3"
                      >
                        Canjear
                      </button>
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <div className="col">
                <div className="card">
                  <img
                    src="img/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body carta-oscura text-light">
                    <h5 className="card-title">Resaturante</h5>
                    <p className="card-text">
                      Opte por el precio con despcuento del producto en este
                      grandioso restaurante
                    </p>
                    <span>
                      <b>S/.65</b> -25% descuento
                    </span>
                    <a href="canje.html">
                      <button
                        type="button"
                        className="boton-verde text-light fw-bold mt-3"
                      >
                        Canjear
                      </button>
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <div className="col">
                <div className="card">
                  <img
                    src="img/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body carta-oscura text-light">
                    <h5 className="card-title">Resaturante</h5>
                    <p className="card-text">
                      Opte por el precio con despcuento del producto en este
                      grandioso restaurante
                    </p>
                    <span>
                      <b>S/.65</b> -25% descuento
                    </span>
                    <a href="canje.html">
                      <button
                        type="button"
                        className="boton-verde text-light fw-bold mt-3"
                      >
                        Canjear
                      </button>
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <div className="col">
                <div className="card">
                  <img
                    src="img/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body carta-oscura text-light">
                    <h5 className="card-title">Resaturante</h5>
                    <p className="card-text">
                      Opte por el precio con despcuento del producto en este
                      grandioso restaurante
                    </p>
                    <span>
                      <b>S/.65</b> -25% descuento
                    </span>
                    <a href="canje.html">
                      <button
                        type="button"
                        className="boton-verde text-light fw-bold mt-3"
                      >
                        Canjear
                      </button>
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <div className="col">
                <div className="card">
                  <img
                    src="img/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body carta-oscura text-light">
                    <h5 className="card-title">Resaturante</h5>
                    <p className="card-text">
                      Opte por el precio con despcuento del producto en este
                      grandioso restaurante
                    </p>
                    <span>
                      <b>S/.65</b> -25% descuento
                    </span>
                    <a href="canje.html">
                      <button
                        type="button"
                        className="boton-verde text-light fw-bold mt-3"
                      >
                        Canjear
                      </button>
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <div className="col">
                <div className="card">
                  <img
                    src="img/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body carta-oscura text-light">
                    <h5 className="card-title">Resaturante</h5>
                    <p className="card-text">
                      Opte por el precio con despcuento del producto en este
                      grandioso restaurante
                    </p>
                    <span>
                      <b>S/.65</b> -25% descuento
                    </span>
                    <a href="canje.html">
                      <button
                        type="button"
                        className="boton-verde text-light fw-bold mt-3"
                      >
                        Canjear
                      </button>
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <div className="col">
                <div className="card">
                  <img
                    src="img/scott-graham-5fNmWej4tAA-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body carta-oscura text-light">
                    <h5 className="card-title">Curso</h5>
                    <p className="card-text">
                      Opte por el precio con despcuento del producto en este
                      grandioso restaurante
                    </p>
                    <span>
                      <b>S/.65</b> -25% descuento
                    </span>
                    <a href="canje.html">
                      <button
                        type="button"
                        className="boton-verde text-light fw-bold mt-3"
                      >
                        Canjear
                      </button>
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <div className="col">
                <div className="card">
                  <img
                    src="img/vasily-koloda-8CqDvPuo_kI-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body carta-oscura text-light">
                    <h5 className="card-title">Curso</h5>
                    <p className="card-text">
                      Opte por el precio con despcuento del producto en este
                      grandioso restaurante
                    </p>
                    <span>
                      <b>S/.65</b> -25% descuento
                    </span>
                    <a href="canje.html">
                      <button
                        type="button"
                        className="boton-verde text-light fw-bold mt-3"
                      >
                        Canjear
                      </button>
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <div className="col">
                <div className="card">
                  <img
                    src="img/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body carta-oscura text-light">
                    <h5 className="card-title">Restaurante</h5>
                    <p className="card-text">
                      Opte por el precio con despcuento del producto en este
                      grandioso restaurante
                    </p>
                    <span>
                      <b>S/.65</b> -25% descuento
                    </span>
                    <a href="canje.html">
                      <button
                        type="button"
                        className="boton-verde text-light fw-bold mt-3"
                      >
                        Canjear
                      </button>
                    </a>
                  </div>
                </div>
              </div> */}
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
      </main>
    </div>
  );
};

export default Catalogo;
