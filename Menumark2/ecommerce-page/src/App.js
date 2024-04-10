import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";
import PaymentPage from "./components/PaymentPage";
import Detail from "./components/details"; // Make sure to import the Detail component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} />}
          />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/detail/:id" element={<Detail />} />{" "}
          {/* Route for Detail component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
