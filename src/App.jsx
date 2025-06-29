import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import PerfilPage from "./pages/perfilpage";

import "./App.css";

function AppContent({ token, setToken }) {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideLayout && <Navbar token={token} setToken={setToken} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <AppContent token={token} setToken={setToken} />
    </Router>
  );
}

export default App;
