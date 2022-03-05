import React from "react";
import { Link } from "react-router-dom";
import Acordeon from "../components/Acordeon";

const Index = () => {
  return (
    <div>
      <Acordeon></Acordeon>
      <section className="container-descrip" id="somos">
        <div className="somos">
          <h2>¿Qué hacemos?</h2>
          <h5>
            Nosotros somos Bio Recycle, una opción de ayuda ambientalista,
            tenemos la finalidad de contribuir con el reciclaje de residuos para
            evitar la contaminación y el daño proegresivo que esto ocasiona en
            nuestro planeta, para ello contamos contigo, ofrecemos el canje de
            residuos como vidrio, plástico, papelería, etc., por vales de
            estudios, bienestar personal y salud.
          </h5>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/recycle.jpg"}
          className="img-logo"
          alt=""
        />
      </section>
      <section className="container-productos">
        <h2>Vales de canje</h2>
        <div className="productos">
          <div className="producto">
            <img
              src={process.env.PUBLIC_URL + "/images/cursos.jpeg"}
              className="img-logo"
              alt=""
            />
            <div className="texto">
              <a
                className="text-light"
                style={{ textDecoration: "none" }}
                href="catalogo.html"
              >
                <h5>Cursos On-line</h5>
                <h6>Tecnología</h6>
              </a>
            </div>
          </div>
          <Link to={"/canje"} className="producto">
            <img
              src={process.env.PUBLIC_URL + "/images/bienestar.jpg"}
              className="img-logo"
              alt=""
            />
            <div className="texto">
              <a
                className="text-light"
                style={{ textDecoration: "none" }}
                href="catalogo.html"
              >
                <h5>Vales de descuento</h5>
                <h6>Bienestar Personal</h6>
              </a>
            </div>
          </Link>
          <div className="producto">
            <img
              src={process.env.PUBLIC_URL + "/images/salud.jpg"}
              className="img-logo"
              alt=""
            />
            <div className="texto">
              <a
                className="text-light"
                style={{ textDecoration: "none" }}
                href="catalogo.html"
              >
                <h5>Vales de descuento</h5>
                <h6>Salud</h6>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="container-descuentos">
        <div className="pantalla">
          <div className="descuento">
            <h2>Reciclar</h2>
            <h6>
              Conoce las opciones de canje, por cada tipo de residuo contamos
              con una equivalencia en puntos, estos puntos se acumularán y
              podrás usarlos en los vales de tu preferencia.
            </h6>
          </div>
          <a href="reciclar.html">
            <button className="btn-descuento">Reciclar</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
