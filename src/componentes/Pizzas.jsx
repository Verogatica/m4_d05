import React from "react";

const Pizzas = ({ datos }) => {
  return (
    <>
    <article className="col-12 col-md-6 col-lg-4 my-4 p-3">
        <div className="card ">
          <img
            src={datos.img}
            className="card-img-top w-100 object-fit-cover imgpizza"
            alt="Pizza"
          />
          <div className="card-body">
            <h4 className="card-title fw-light mb-3 fw-bold">
              Pizza {datos.name}
            </h4>
            <hr className="p-0"/>
            <p className="card-text h6 fw-light text-start">Ingredientes:</p>
            <ul className="fw-light text-right">
            {datos.ingredients.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
             ))}
            </ul>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item fw-light gris py-0 text-start fw-bold fs-5">
                Precio: ${datos.price}
              </li>
            </ul>
            <div className="container d-flex justify-content-around pt-3">
              <button type="button" className="btn btn-outline-dark">
                Ver más 👀
              </button>
              <button type="button" className="btn btn-dark">
                Añadir 🛒
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Pizzas;
