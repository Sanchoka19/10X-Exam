import './App.css'
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/page/HomePage";
import ShopPage from "./components/page/ShopPage";
import LoginPage from "./components/page/LoginPage";
import RegistrationPage from "./components/page/RegistrationPage";
import ForgetPassword from "./components/page/ForgerPasswordPage";
import Confirmation from "./components/page/Confirmation";
import Newpass from "./components/page/Newpass";
import ProductPage from './components/page/ProductPage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<RegistrationPage />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/Confirm" element={<Confirmation />} />
        <Route path="/Newpass" element={<Newpass />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App;
