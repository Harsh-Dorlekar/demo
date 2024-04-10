import React from "react";
import products from "../data/productsData"; // Import if needed to display all products

function Checkout({ cartItems }) {
  console.log(cartItems); // Displaying cart items in the console

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checkout;
