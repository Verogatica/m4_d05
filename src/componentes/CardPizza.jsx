import React from 'react';

const CardPizza = (props) => {
  return (
    <div>
     <article class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4 w-100 p-3">
        <div class="card ">
          <img src={props.img} class="card-img-top" alt="Pizza"/>
          <div class="card-body">
            <h4 class="card-title fw-light mb-3 fw-bold">
           Pizza {props.nombre}
            </h4>
            <hr class="p-0"/>
            <p class="card-text h6 fw-light text-center">Ingredientes:</p>
            <p class="fw-light text-center">
              {props.ingredientes}
            </p>
            <hr />
            <ul class="list-group list-group-flush">
              <li class="list-group-item fw-light gris py-0 text-center fw-bold fs-5">
              Precio: ${props.precio}
              </li>
            </ul>
            <div class = "container d-flex justify-content-around pt-3">
            <button type="button" class="btn btn-outline-dark">Ver más &#128064;</button>
            <button type="button" class="btn btn-dark">Añadir &#128722;</button>
            </div>


          </div>
        </div>
      </article>
    </div>
  );
};

export default CardPizza;
