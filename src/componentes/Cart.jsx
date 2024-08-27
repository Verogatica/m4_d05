import React, { useState } from "react";
import { productos } from "../assets/data/pizzas.js";

const Cart = () => {
  const [cart, setCart] = useState(
    productos.map((pizza) => ({ ...pizza, cantidad: 0 }))
  );

  const sumaPizza = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
      )
    );
  };

  const restaPizza = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id
          ? { ...pizza, cantidad: Math.max(pizza.cantidad - 1, 0) }
          : pizza
      )
    );
  };

  const total = cart.reduce(
    (acc, pizza) => acc + pizza.precio * pizza.cantidad,
    0
  );

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-8">
          <h2>Carrito de Compras</h2>
          {cart.map((pizza) => {
            const ingredientesArray = pizza.ingredientes.split(",");

            return (
              <div key={pizza.id} className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 imgpizza">
                    <img
                      src={pizza.img}
                      className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                      alt={pizza.nombre}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{pizza.nombre}</h5>
                      <p className="card-text mb-0">Precio: ${pizza.precio.toLocaleString("es-CL")}</p>
                      <ul className="fw-light list-unstyled d-flex">
                        {ingredientesArray.map((ingrediente, index) => (
                          <li key={index}>
                            {ingrediente.trim()}
                            {index < ingredientesArray.length - 1
                              ? ", "
                              : index === ingredientesArray.length - 1
                              ? "."
                              : ""}
                          </li>
                        ))}
                      </ul>
                      <div className="d-flex flex-column align-items-end">
                        <div className="me-3">
                          <button
                            onClick={() => sumaPizza(pizza.id)}
                            className="btn btn-outline-success me-1"
                          >
                            +
                          </button>
                          <button
                            onClick={() => restaPizza(pizza.id)}
                            className="btn btn-outline-danger"
                          >
                            -
                          </button>
                        </div>
                        <p className="card-text mb-0">
                          Unidades: {pizza.cantidad}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-4 ">
          <div className="mb-3 " >
            <h3>Resumen de compra</h3>
            <hr></hr>
            <h4>Total a pagar: ${total.toLocaleString("es-CL")}</h4>
            <button className="btn btn-primary col-12 rounded-pill mt-4">Continuar con el pago</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
