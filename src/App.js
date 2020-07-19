import React from 'react';
import { Header } from "./components/Header/Header";
import { Home } from "./components/Pages/Home/Home";
import { Products } from "./components/Pages/Products/Products";
import { Cart } from "./components/Pages/Cart/Cart";
import { ProductIndex } from "./components/ProductIndex/ProductIndex";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { NotFound } from "./components/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />}></Route>
          <Route path="products" element={<Products />}>
            <Route path="/" element={<ProductIndex />} />
            <Route path=":productID" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;