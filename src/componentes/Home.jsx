import React, { useEffect, useState } from 'react';
import CardPizza from './CardPizza';
import Pizzas from './Pizzas';
//import { productos } from '../assets/data/pizzas.js';

const Home = () => {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:5001/api/pizzas')
      const data = await res.json();
      setPizzas(data);
      console.log (data)
    }
    getData();
  }, []);

  return (
    <>
      <div className='Banner'>
        <h2>¡Pizzería Mamma Mia!</h2>
        <h6>Tenemos las mejores pizzas que podrás encontrar</h6>
      </div>
      <div className="container">
        <div className="row">
          {pizzas.map((pizza) => (
            <Pizzas datos={pizza}></Pizzas>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

