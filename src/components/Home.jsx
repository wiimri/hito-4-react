import React from 'react';
import CardPizza from './CardPizza';
import { pizzas } from '../data/pizzas';

const Home = ({ cart, setCart }) => {
  return (
    <div className="home-container container mt-5">
      <h1 className="mb-4">Pizzas disponibles</h1>
      <div className="row">
        {pizzas.map((pizza, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <CardPizza
              nombre={pizza.nombre}
              precio={pizza.precio}
              ingredientes={pizza.ingredientes}
              imagen={pizza.imagen}
              onAdd={() => {
                const exists = cart.find(p => p.nombre === pizza.nombre);
                if (exists) {
                  const updated = cart.map(p =>
                    p.nombre === pizza.nombre
                      ? { ...p, cantidad: p.cantidad + 1 }
                      : p
                  );
                  setCart(updated);
                } else {
                  setCart([...cart, { ...pizza, cantidad: 1 }]);
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
