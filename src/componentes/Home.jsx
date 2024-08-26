import React from 'react';
import CardPizza from './CardPizza';
import { productos } from './data/pizzas.js';

const Home = () => {
  return (
    <>
      <div className='Banner'>
        <h2>¡Pizzería Mamma Mia!</h2>
        <h6>Tenemos las mejores pizzas que podrás encontrar</h6>
      </div>
      <div className="container">
        <div className="row">
          {productos.map((pizza) => (
            <div className="col-12 col-sm-6 col-md-4" key={pizza.id}>
              <CardPizza 
                nombre={pizza.nombre}
                precio={pizza.precio}
                stock={pizza.stock}
                disponibilidad={pizza.disponibilidad}
                img={pizza.img}
                ingredientes={pizza.ingredientes}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

