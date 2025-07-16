import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import CartModal from "./components/CartModal";

import PizzaList from "./components/PizzaList.jsx";
import PizzaList from "../components/PizzaList.jsx";
import PizzaDetails from "./components/PizzaDetails";
import NotFound from "./components/NotFound";

import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import PerfilPage from "./pages/perfilpage";

function AppContent({ token, setToken, cart, setCart, showModal, setShowModal }) {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideLayout && (
        <Navbar
          token={token}
          setToken={setToken}
          cart={cart}
          setCart={setCart}
          setShowModal={setShowModal}
        />
      )}

      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        <Route path="/pizzas" element={<PizzaList cart={cart} setCart={setCart} />} />
        <Route path="/pizzas/:id" element={<PizzaDetails cart={cart} setCart={setCart} />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/login" element={<LoginPage setToken={setToken} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
        // <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
    <Route path="/" element={<PizzaList cart={cart} setCart={setCart} />} />

      </Routes>

      {!hideLayout && <Footer />}

      {showModal && (
        <CartModal
          cart={cart}
          setCart={setCart}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

function App() {
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <AppContent
        token={token}
        setToken={setToken}
        cart={cart}
        setCart={setCart}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </Router>
  );
}

export default App;
