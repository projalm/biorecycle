import React from "react";

const Acordeon = () => {
  return (
    <div className="">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={process.env.PUBLIC_URL + "/images/image-1.jpg"}
              className="d-block w-100 tamano"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Bio Recycle</h5>
              <p>
                Nuestro ideal es motivar el reciclaje, cuidando el planeta y de
                ti mismo
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/images/papel.jpg"}
              className="d-block w-100 tamano"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Reciclaje de Residuos</h5>
              <p>
                Déjanos tus residuos y podrás tener acceso a varios beneficios
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/images/image-3.jpg"}
              className="d-block w-100 tamano"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>ÚNETE</h5>
              <p>Sé parte de esta comunidad y cuidemos juntos el planeta :D</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    // <section className="container-carrusel">
    //   <div
    //     id="carouselExampleIndicators"
    //     className="carousel slide"
    //     data-ride="carousel"
    //   >
    //     <ol className="carousel-indicators">
    //       <li
    //         data-target="#carouselExampleIndicators"
    //         data-slide-to={0}
    //         className="active"
    //       />
    //       <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    //       <li data-target="#carouselExampleIndicators" data-slide-to={2} />
    //     </ol>
    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         <img
    //           className="d-block w-100"
    //           src={process.env.PUBLIC_URL + "/images/botellasplastico.jpg"}
    //           alt="First slide"
    //         />
    //         <div className="carousel-texto carousel-caption d-none d-md-block rounded">
    //           <h5>Texto de ejemplo</h5>
    //           <p>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //             Molestias ducimus minima fugia.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <img
    //           className="d-block w-100"
    //           src={process.env.PUBLIC_URL + "/images/periodico.jpg"}
    //           alt="Second slide"
    //         />
    //         <div className="carousel-texto carousel-caption d-none d-md-block rounded">
    //           <h5>Texto de ejemplo</h5>
    //           <p>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //             Molestias ducimus minima fugia.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <img
    //           className="d-block w-100"
    //           src={process.env.PUBLIC_URL + "/images/431201.jpg"}
    //           alt="Third slide"
    //         />
    //         <div
    //           className="carousel-texto carousel-caption d-none d-md-block rounded"
    //           style={{ bsBgOpacity: "0.5" }}
    //         >
    //           <h5>Texto de ejemplo</h5>
    //           <p>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //             Molestias ducimus minima fugia.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <a
    //       className="carousel-control-prev"
    //       href="#carouselExampleIndicators"
    //       role="button"
    //       data-slide="prev"
    //     >
    //       <span className="carousel-control-prev-icon" aria-hidden="true" />
    //     </a>
    //     <a
    //       className="carousel-control-next"
    //       href="#carouselExampleIndicators"
    //       role="button"
    //       data-slide="next"
    //     >
    //       <span className="carousel-control-next-icon" aria-hidden="true" />
    //     </a>
    //   </div>
    // </section>
  );
};

export default Acordeon;
