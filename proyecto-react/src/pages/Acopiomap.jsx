import React from "react";
import "../../src/assets/styles/acopio.css";

const Acopiomap = () => {
  return (
    <div>
      <main className="acopio-main">
        <div className="encabezado">
          <h1>Puntos de acopio</h1>
          <h3>
            Dirigete a nuestro punto de acopio más cercano y recicla tus
            residuos. Al momento de la entrega debes indicar tu usuario para que
            tus puntos se sumen en tu cuenta
          </h3>
        </div>
        <div className="container-iframe">
          <div>
            <ul className="lista-distritos">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Lima
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  San Martin de Porres
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  San Miguel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Villa Maria del Triunfo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Los olivos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Pueblo libre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  San Borja
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  La Molina
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Puente Piedra
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Jesús María
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  El Agustino
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  La Victoria
                </a>
              </li>
            </ul>
          </div>
          <div className="iframe">
            <h5>
              Jirón de la Unión N.º 300 y Jirón Conde de Superunda N.º 141,
              Cercado de Lima
            </h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499487.6353884561!2d-77.26797460823914!3d-12.026498676634573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses-419!2spe!4v1642619234045!5m2!1ses-419!2spe"
              width={600}
              height={435}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Acopiomap;
