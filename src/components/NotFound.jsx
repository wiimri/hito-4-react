import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import notFoundAnimation from "../assets/animation/pizza-404.json";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Lottie animationData={notFoundAnimation} loop={true} />
      </div>
      <h1 className="display-4 mt-3">404 - Página no encontrada</h1>
      <p className="lead">Lo sentimos, la pizza que buscas no existe 🍕❌</p>
      <Link to="/" className="btn btn-primary mt-3">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
