import React from "react";

const Cart = ({ cart = [], setCart }) => {
  const total = cart.reduce((acc, item) => acc + item.precio * (item.cantidad || 1), 0);
  const increaseQuantity = (nombre) => {
    const updatedCart = cart.map((item) =>
      item.nombre === nombre
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    );
    setCart(updatedCart);
  };
  const removeFromCart = (nombre) => {
    const updatedCart = cart
      .map(item =>
        item.nombre === nombre
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
      .filter(item => item.cantidad > 0);
    setCart(updatedCart);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info">Tu carrito está vacío.</div>
      ) : (
        <>
          <div className="row">
            {cart.map((item, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">
                      <strong>Precio unitario:</strong> ${item.precio}<br />
                      <strong>Cantidad:</strong> {item.cantidad}<br />
                      <strong>Subtotal:</strong> ${item.precio * item.cantidad}
                    </p>
                    <ul className="list-unstyled">
                      {item.ingredientes.map((ing, i) => (
                        <li key={i}>🍕 {ing}</li>
                      ))}
                    </ul>
                    <button
                      className="btn btn-danger mt-3"
                      onClick={() => removeFromCart(item.nombre)}
                    >
                      Eliminar uno
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-end mt-4">
            <h4>Total: <strong>${total}</strong></h4>
            <button
              className="btn btn-primary mt-2"
              onClick={() => alert("Compra realizada con éxito!")}
            >
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
