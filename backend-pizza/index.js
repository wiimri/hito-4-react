const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const pizzas = [
  {
    id: "p001",
    name: "napolitana",
    desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos...",
    img: "../src/assets/img/pizza-napolitana.jpg",
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    price: 5950
  },
  {
    id: "p002",
    name: "margarita",
    desc: "La pizza es una preparación culinaria...",
    img: "../src/assets/img/pizza-margarita.jpg",
    ingredients: ["queso", "salsa de tomate", "albahaca"],
    price: 5500
  }
];

app.get('/api/pizzas', (req, res) => {
  res.json(pizzas);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
