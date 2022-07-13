import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/products" element={<Products/>}></Route>
        <Route exact path="/products/:id" element={<Product/>}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>
        <Route exact path="/checkout" element={<Checkout/>}></Route>

      </Routes>
     
    </>
  );
}

export default App;
