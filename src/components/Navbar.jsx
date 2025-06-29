import { Link } from 'react-router-dom';

const Navbar = ({ token, setToken }) => {
  const total = 25000;

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <nav className="navbar fondo-nav navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pizzería Francesco Virgolini!
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Inicio</Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/perfil">
                    <i className="fas fa-user me-1"></i> Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link px-3 btn btn-link" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt me-1"></i> Cerrar Sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/login">
                    <i className="fas fa-sign-in-alt me-1"></i> Iniciar Sesión
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/register">
                    <i className="fas fa-user-plus me-1"></i> Registro
                  </Link>
                </li>
              </>
            )}
          </ul>
          <button className="btn btn-outline-info d-flex align-items-center ms-3 btn-price">
            <i className="fas fa-shopping-cart me-2"></i>
            Total: {total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
