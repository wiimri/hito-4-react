import Login from "../components/login"; 
import './PageStyles.css';

const LoginPage = ({ setToken }) => {
  return (
    <div className="fullpage-auth">
      <div className="auth-card">
        <h2 className="text-center">Iniciar Sesión</h2>
        <Login setToken={setToken} />
        <p className="text-center mt-3">
          ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
