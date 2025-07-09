import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cart = [], token, setToken, setShowModal }) => {
  const totalItems = cart.reduce((acc, item) => acc + (item.cantidad || 1), 0);
  const totalPrecio = cart.reduce((acc, item) => acc + item.precio * (item.cantidad || 1), 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand text-warning fw-bold" to="/">
        🍕 Pizzería Francesco Virginolini!
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Inicio</Link>
          </li>
        </ul>

        <ul className="navbar-nav">
          {!token ? (
            <>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/register">Register</Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link className="nav-link text-white" to="/perfil">Perfil</Link>
            </li>
          )}

          <li className="nav-item">
            <button
              className="btn btn-warning fw-bold ms-3"
              onClick={() => setShowModal(true)}
            >
              🛒 Total: ${totalPrecio.toLocaleString()}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
