import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('Todos los campos son obligatorios');
      return;
    }

    setMessage('Inicio de sesión exitoso ✅');

    // Simular autenticación
    setToken('usuario-logueado');

    // Redirigir al perfil o a home
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="form-control mb-3" />
      <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} className="form-control mb-3" />
      <button type="submit" className="btn btn-primary w-100">Entrar</button>
      {message && <p className="mt-3 text-success">{message}</p>}
    </form>
  );
}
