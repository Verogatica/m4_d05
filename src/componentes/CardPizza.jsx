import React from 'react';

const CardPizza = (props) => {
  return (
    <div>
     <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4 w-100 p-3">
        <div className="card ">
          <img src={props.img} className="card-img-top" alt="Pizza"/>
          <div className="card-body">
            <h4 className="card-title fw-light mb-3 fw-bold">
           Pizza {props.nombre}
            </h4>
            <hr className="p-0"/>
            <p className="card-text h6 fw-light text-center">Ingredientes:</p>
            <p className="fw-light text-center">
              {props.ingredientes}
            </p>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item fw-light gris py-0 text-center fw-bold fs-5">
              Precio: ${props.precio}
              </li>
            </ul>
            <div className = "container d-flex justify-content-around pt-3">
            <button type="button" className="btn btn-outline-dark">Ver más &#128064;</button>
            <button type="button" className="btn btn-dark">Añadir &#128722;</button>
            </div>


          </div>
        </div>
      </article>
    </div>
  );
};

export default CardPizza;
