import React, { useState, useEffect } from "react";
import "./ProductList.css";
import butterChickenImg from "../Media/butter.webp";
import { useNavigate } from "react-router-dom"; // Added for navigation

function ProductList({ cartItems, setCartItems }) {
  // Assuming cartItems and setCartItems are passed as props
  const [cartCounts, setCartCounts] = useState({});
  const [alertMessage, setAlertMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate(); // Added for navigation

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) =>
        acc + item.quantity * parseFloat(item.price.replace(/\$/, "")),
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  const seeMore = (productId) => {
    navigate(`/detail/${productId}`); // Navigate to Detail.js with the product id in the URL
  };

  const addToCart = (product) => {
    setCartCounts((prevCounts) => ({
      ...prevCounts,
      [product.id]: (prevCounts[product.id] || 0) + 1,
    }));

    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    setAlertMessage(`${product.name} has been added to cart.`);
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };

  const handlePayNow = () => {
    navigate("/payment", { state: { total: totalPrice } }); // Pass total as state
  };
  const products = [
    {
      id: 1,
      name: "Butter Chicken",
      description: "Tender chicken in a rich, creamy tomato sauce.",
      price: "$50",
      image: butterChickenImg,
    },
    {
      id: 2,
      name: "Palak Paneer",
      description: "Soft paneer cubes in a smooth spinach curry.",
      price: "$300",
      image: butterChickenImg,
    },
    {
      id: 3,
      name: "Chole Bhature",
      description: "Spicy chickpeas curry served with puffed bread.",
      price: "$250",
      image: butterChickenImg,
    },
    {
      id: 4,
      name: "Biryani",
      description: "Fragrant basmati rice dish with saffron & spices.",
      price: "$400",
      image: butterChickenImg,
    },
    {
      id: 5,
      name: "Masala Dosa",
      description: "Crispy crepes stuffed with spicy potato filling.",
      price: "$200",
      image: butterChickenImg,
    },
    {
      id: 6,
      name: "Rogan Josh",
      description: "Slow-cooked lamb curry with Kashmiri spices.",
      price: "$450",
      image: butterChickenImg,
    },
    {
      id: 7,
      name: "Dal Makhani",
      description: "Creamy stew of lentils and beans.",
      price: "$280",
      image: butterChickenImg,
    },
    {
      id: 8,
      name: "Pani Puri",
      description: "Hollow puri filled with a mixture of flavored water.",
      price: "$150",
      image: butterChickenImg,
    },
  ];

  return (
    <div className="product-list-container">
      <div className="product-list">
        <h1>Start Ordering</h1>
        <h5>Feast Your Eyes, Treat Your Taste.</h5>
        {alertMessage && <div className="alert">{alertMessage}</div>}
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h2>{product.name}</h2>
                <p className="productdesp">{product.description}</p>
                <p className="product-price">{product.price}</p>
              </div>
              <div className="product-actions">
                <button className="btn-add" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
                <button
                  className="btn-more"
                  onClick={() => navigate(`/detail/${product.id}`)}
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-panel">
        <h2>Checkout List</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x {item.price} = $
              {(
                item.quantity * parseFloat(item.price.replace(/\$/, ""))
              ).toFixed(2)}
            </li>
          ))}
        </ul>
        <div className="cart-total">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button className="btn-pay-now" onClick={handlePayNow}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
