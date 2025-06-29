import Register from "../components/register";
import './PageStyles.css';

const RegisterPage = () => {
  return (
    <div className="fullpage-auth">
      <div className="auth-card">
        <h2 className="text-center">Registro de Usuario</h2>
        <Register />
        <p className="text-center mt-3">
          ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
