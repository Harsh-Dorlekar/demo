import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <div className="navigation">
        <button className="signin-button">SignIn</button>
        <Link to="/checkout">
          <button className="checkout-button">Checkout</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
