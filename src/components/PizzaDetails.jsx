import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PizzaDetails = ({ cart, setCart }) => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => setPizza(res.data))
      .catch((err) => {
        console.error("Error al cargar detalles:", err);
        navigate('/notfound');
      });
  }, [id, navigate]);

  const agregarAlCarrito = () => {
    const exists = cart.find((p) => p.name === pizza.name);
    if (exists) {
      const updated = cart.map((p) =>
        p.name === pizza.name ? { ...p, cantidad: p.cantidad + 1 } : p
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...pizza, cantidad: 1 }]);
    }
  };

  if (!pizza) return <div className="container mt-5">Cargando...</div>;

  return (
    <div className="container mt-5">
      <h1>{pizza.name}</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h4>Ingredientes:</h4>
          <ul>
            {pizza.ingredients.map((ing, idx) => (
              <li key={idx}>🍕 {ing}</li>
            ))}
          </ul>
          <h5 className="mt-3">Precio: ${pizza.price}</h5>
          <p className="mt-3">{pizza.desc}</p>
          <button className="btn btn-success mt-3" onClick={agregarAlCarrito}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
