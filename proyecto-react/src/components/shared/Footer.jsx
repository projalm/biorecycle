import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="d-flex justify-content-center text-light fs-3">
          <div className="m-5">
            <i className="bi bi-facebook ms-3 me-3" />
            <i className="bi bi-twitter ms-3 me-3" />
            <i className="bi bi-instagram ms-3 me-3" />
            <i className="bi bi-whatsapp ms-3 me-3" />
          </div>
        </div>
        <ul className="nav justify-content-center pb-2">
          <li className="nav-item">
            <a className="nav-link text-light" aria-current="page" href="#">
              INICIO
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              CANJE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              ¿CÓMO USAR?
            </a>
          </li>
        </ul>
        <div className="logo text-center">
          <img
            src={process.env.PUBLIC_URL + "/images/logopng.png"}
            className="img-logo mb-2"
            alt=""
          />
        </div>
        <div className="text-center pb-3">
          <span className="text-light">
            Copyright © 2022 All rights reserved - BioRecycle
          </span>
          <br />
          <span className="text-light">Designe by DUENDES VERDES</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
