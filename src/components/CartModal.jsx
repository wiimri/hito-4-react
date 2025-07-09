import React from "react";
import "./CartModal.css";

const CartModal = ({ cart, setCart, onClose }) => {
  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const increaseQuantity = (nombre) => {
    setCart(cart.map(item =>
      item.nombre === nombre ? { ...item, cantidad: item.cantidad + 1 } : item
    ));
  };

  const decreaseQuantity = (nombre) => {
    const updatedCart = cart
      .map(item =>
        item.nombre === nombre ? { ...item, cantidad: item.cantidad - 1 } : item
      )
      .filter(item => item.cantidad > 0);
    setCart(updatedCart);
  };

  return (
    <div className="cart-modal-backdrop">
      <div className="cart-modal">
        <div className="cart-header">
          <i className="fas fa-shopping-cart me-2"></i> Detalles del pedido:
          <span className="close-btn" onClick={onClose}>&times;</span>
        </div>
        <div className="cart-body">
          {cart.map((item, i) => (
            <div className="cart-item" key={i}>
              <img src={item.imagen} alt={item.nombre} />
              <div className="cart-info">
                <strong>{item.nombre}</strong>
                <p>${item.precio.toLocaleString()}</p>
              </div>
              <div className="cart-qty">
                <button className="btn-red" onClick={() => decreaseQuantity(item.nombre)}>-</button>
                <span>{item.cantidad}</span>
                <button className="btn-green" onClick={() => increaseQuantity(item.nombre)}>+</button>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className="cart-footer">
          <h5>Total: <span>${total.toLocaleString()}</span></h5>
          <button className="btn-pay"><i className="fas fa-credit-card me-2"></i>Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
