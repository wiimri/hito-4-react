const images = import.meta.glob('../assets/img/*.png', { eager: true, import: 'default' });

export const pizzas = [
  {
    nombre: "Pepperoni",
    precio: 8000,
    ingredientes: ["Queso mozzarella", "Pepperoni", "Salsa de tomate"],
     imagen: images['../assets/img/pizzapeperoni.png'],  },
  {
    nombre: "Margarita",
    precio: 7500,
    ingredientes: ["Queso mozzarella", "Tomate", "Albahaca"],
     imagen: images['../assets/img/pizzamargarita.png'],  },
  {
    nombre: "Hawaiana",
    precio: 8500,
    ingredientes: ["Queso mozzarella", "Piña", "Jamón", "Salsa de tomate"],
    imagen: images['../assets/img/pizzahawaiana.png'],
  },
  {
    nombre: "Cuatro Quesos",
    precio: 8900,
    ingredientes: ["Mozzarella", "Gorgonzola", "Parmesano", "Provolone"],
   imagen: images['../assets/img/pizzacuatroquesos.png'],
  },
  {
    nombre: "Vegetariana",
    precio: 7800,
    ingredientes: ["Pimientos", "Cebolla", "Champiñones", "Aceitunas"],
     imagen: images['../assets/img/pizzavegetariana.png'],  },
  {
    nombre: "Napolitana",
    precio: 8300,
    ingredientes: ["Tomate", "Anchoas", "Alcaparras", "Aceite de oliva"],
      imagen: images['../assets/img/pizzanapolitana.png'],
  },
];
