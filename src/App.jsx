import './App.css'
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

import HomePage from "./components/page/HomePage";
import ShopPage from "./components/page/ShopPage";
import LoginPage from "./components/page/LoginPage";
import RegistrationPage from "./components/page/RegistrationPage";
import ForgetPassword from "./components/page/ForgerPasswordPage";
import Confirmation from "./components/page/Confirmation";
import Newpass from "./components/page/Newpass";
import ProductPage from './components/page/ProductPage';

import products from "./data/products.json"


function App() {
  const [burgerActive, setBurgerActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product, size, quantity) => {
    setCart((prev) => {
      const exist = prev.find(
        (item) => item.id === product.id && item.size === size
      );

      if (exist) {
        return prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, size, quantity }];
      }
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<RegistrationPage />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/Confirm" element={<Confirmation />} />
        <Route path="/Newpass" element={<Newpass />} />
        <Route path="/shop" element={
          <ShopPage
            burgerActive={burgerActive} setBurgerActive={setBurgerActive}
            cartActive={cartActive} setCartActive={setCartActive}
          />}
        />
        <Route path="/product" element={<ShopPage />} />
        <Route
          path="/product/:id"
          element={
            <ProductPage
              burgerActive={burgerActive} setBurgerActive={setBurgerActive}
              cartActive={cartActive} setCartActive={setCartActive}
              addToCart={addToCart} cart={cart} products={products}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App;
