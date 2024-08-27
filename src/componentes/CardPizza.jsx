import React from 'react';

const CardPizza = ({ nombre, precio, stock, disponibilidad, img, ingredientes }) => {
const ingredientesList = ingredientes.split(', ');

  return (
    <div>
      <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4 w-100 p-3">
        <div className="card ">
          <img src={img} className="card-img-top w-100 object-fit-cover imgpizza" alt="Pizza"/>
          <div className="card-body">
            <h4 className="card-title fw-light mb-3 fw-bold">
              Pizza {nombre}
            </h4>
            <hr className="p-0"/>
            <p className="card-text h6 fw-light text-start ">Ingredientes:</p>
            <ul className="fw-light text-center object-fit-cover">
              {ingredientesList.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))}
            </ul>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item fw-light gris py-0 text-start fw-bold fs-5">
                Precio: ${precio}
              </li>
              <li className="list-group-item fw-light gris py-0 text-start">
                Stock: {stock}
              </li>
              <li className="list-group-item fw-light gris py-0 text-center">
                Disponibilidad: {disponibilidad}
              </li>
            </ul>
            <div className="container d-flex justify-content-around pt-3">
              <button type="button" className="btn btn-outline-dark">Ver más 👀</button>
              <button type="button" className="btn btn-dark">Añadir 🛒</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CardPizza;
