import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./PaymentPage.css";

function PaymentPage() {
  const location = useLocation(); // Access the location object
  const subtotal = location.state?.total;
  const taxRate = 0.05;
  const taxAmount = subtotal * taxRate;
  const totalPrice = subtotal + taxAmount;
  const { price } = location.state || {};

  React.useEffect(() => {
    console.log("Subtotal: $", subtotal ? subtotal.toFixed(2) : "0.00");
    console.log("Taxes: $", taxAmount.toFixed(2));
    console.log("Total Amount with Taxes: $", totalPrice.toFixed(2));
  }, [subtotal, taxAmount, totalPrice]);
  // This effect runs when the component mounts
  useEffect(() => {
    if (price) {
      console.log("Price: ", price); // Log the price to the console
    }
  }, [price]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you would implement actual payment logic
    console.log("Processing payment for the amount: $", totalPrice.toFixed(2));
    console.log("Processing payment for: ", price);
    alert("Payment Successful!");
  };

  return (
    <>
      <h1 className="main-title">Payment Page</h1>
      <div className="payment-container">
        <div className="receipt-summary">
          <h2>Auto Detailing</h2>
          <div className="receipt-line"></div>
          <div className="receipt-details">
            <div className="receipt-detail">
              <span>Subtotal</span>
              <span>${subtotal ? subtotal.toFixed(2) : "0.00"}</span>
            </div>
            <div className="receipt-detail">
              <span>Taxes</span>
              <span>${taxAmount.toFixed(2)}</span>
            </div>
            <div className="receipt-line"></div>
            <div className="receipt-detail bold">
              <span>Order total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <form className="payment-form" onSubmit={handleFormSubmit}>
          <h2>Enter your payment details</h2>

          <div className="form-group">
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="Enter your card number"
              required
            />
          </div>

          <div className="form-group form-row">
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              placeholder="MM/YY"
              className="small-field"
              required
            />
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="CVV"
              className="small-field"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              placeholder="Enter your street address"
              required
            />
          </div>

          <div className="form-group form-row">
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              required
            />
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder="Postal code"
              className="small-field"
              required
            />
          </div>

          <button type="submit" className="btn-pay-now">
            Pay now
          </button>
        </form>
      </div>
    </>
  );
}

export default PaymentPage;
