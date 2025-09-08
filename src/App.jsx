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
  const [amount, setAmount] = useState(1);

  const updateQuantity = (id, size, newQty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };


  const addToCart = (product, size, amount) => {
    setCart((prev) => {
      const exist = prev.find(
        (item) => item.id === product.id && item.size === size
      );

      const numericAmount = Number(amount) || 1; // ✅ ensure it's a number

      if (exist) {
        return prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + numericAmount }
            : item
        );
      } else {
        return [...prev, { ...product, size, quantity: numericAmount }];
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
            amount={amount} setAmount={setAmount}
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
              updateQuantity={updateQuantity}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App;
