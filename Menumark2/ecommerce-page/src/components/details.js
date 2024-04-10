import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./details.css";
import butterChickenImg from "../Media/butter.webp";

const products = [
  {
    id: 1,
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato sauce.",
    price: "$50",
    details:
      "Marinate chicken in a mix of yogurt and spices overnight. Cook onions, tomatoes, and spices in butter, then add chicken. Simmer until tender. Finish with cream and serve with basmati rice.",
    rating: 5,
    nutritionIngredients:
      "Calories: 500 kcal, Protein: 35g, Fat: 20g, Carbohydrates: 40g. Ingredients: Chicken, Butter, Tomato sauce, Cream, Spices.",
    image: butterChickenImg,
  },
  {
    id: 2,
    name: "Palak Paneer",
    description: "Soft paneer cubes in a smooth spinach curry.",
    price: "$300",
    details:
      "Blanch spinach, then puree. Fry paneer cubes until golden. Cook spices, tomato, and pureed spinach. Add paneer, simmer, and serve with naan.",
    rating: 5,
    nutritionIngredients:
      "Calories: 250 kcal, Protein: 18g, Fat: 15g, Carbohydrates: 20g. Ingredients: Paneer, Spinach, Tomato, Spices, Cream.",
    image: butterChickenImg,
  },
  {
    id: 3,
    name: "Chole Bhature",
    description:
      "Spicy chickpeas curry served with puffed bread. A classic North Indian street food.",
    price: "$250",
    details:
      "Soak chickpeas overnight, then cook with onions, tomatoes, and spices. Serve with fried bhature bread made from a dough of flour, yogurt, and ghee.",
    rating: 5,
    nutritionIngredients:
      "Calories: 400 kcal, Protein: 20g, Fat: 10g, Carbohydrates: 65g. Ingredients: Chickpeas, Flour, Yogurt, Spices, Ghee.",
    image: butterChickenImg,
  },
  {
    id: 4,
    name: "Biryani",
    description:
      "Fragrant basmati rice dish with saffron & spices. Mixed with marinated chicken or vegetables.",
    price: "$400",
    details:
      "Marinate chicken in spices. Layer cooked chicken with partially cooked rice, saffron, and fried onions. Seal pot and cook on low heat. Serve with raita.",
    rating: 5,
    nutritionIngredients:
      "Calories: 550 kcal, Protein: 25g, Fat: 18g, Carbohydrates: 75g. Ingredients: Chicken, Basmati Rice, Saffron, Spices, Onions.",
    image: butterChickenImg,
  },
  {
    id: 5,
    name: "Masala Dosa",
    description:
      "Crispy crepes stuffed with spicy potato filling. A popular South Indian dish.",
    price: "$200",
    details:
      "Prepare a fermented batter of rice and lentils. Cook until crispy. Fill with a mix of mashed potatoes, onions, and spices. Serve with coconut chutney and sambar.",
    rating: 5,
    nutritionIngredients:
      "Calories: 300 kcal, Protein: 6g, Fat: 7g, Carbohydrates: 55g. Ingredients: Rice, Lentils, Potatoes, Onions, Spices.",
    image: butterChickenImg,
  },
  {
    id: 6,
    name: "Rogan Josh",
    description:
      "Slow-cooked lamb curry with Kashmiri spices. Rich in flavor and aroma.",
    price: "$450",
    details:
      "Marinate lamb in yogurt and spices. Cook with a gravy of onions, garlic, and ginger, adding water until tender. Finish with a sprinkle of fresh coriander.",
    rating: 5,
    nutritionIngredients:
      "Calories: 600 kcal, Protein: 40g, Fat: 35g, Carbohydrates: 20g. Ingredients: Lamb, Yogurt, Onions, Garlic, Spices.",
    image: butterChickenImg,
  },
  {
    id: 7,
    name: "Dal Makhani",
    description:
      "Creamy stew of lentils and beans. Cooked with butter and cream for a rich taste.",
    price: "$280",
    details:
      "Soak black lentils and kidney beans overnight. Cook with tomatoes, garlic, and spices. Finish with cream and butter for a rich texture. Serve with rice.",
    rating: 5,
    nutritionIngredients:
      "Calories: 450 kcal, Protein: 25g, Fat: 20g, Carbohydrates: 50g. Ingredients: Black Lentils, Kidney Beans, Cream, Spices, Butter.",
    image: butterChickenImg,
  },
  {
    id: 8,
    name: "Pani Puri",
    description:
      "Hollow puri filled with a mixture of flavored water, tamarind chutney, chili, chaat masala, potato, onion, and chickpeas.",
    price: "$150",
    details:
      "Make puri from semolina and fry until crisp. Prepare spiced water with mint, tamarind, and spices. Fill puris with potato, chickpeas, and spiced water just before serving.",
    rating: 5,
    nutritionIngredients:
      "Calories: 100 kcal per serving, Protein: 2g, Fat: 4g, Carbohydrates: 15g. Ingredients: Semolina, Potatoes, Chickpeas, Spices, Tamarind.",
    image: butterChickenImg,
  },
];

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((product) => product.id === parseInt(id, 10));

  const [showDescription, setShowDescription] = useState(false);
  const [showNutritionIngredients, setShowNutritionIngredients] =
    useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleGoBack = () => {
    navigate("/"); // Navigate back to the ProductList page (assumed to be the root path)
  };

  const starRating = "⭐".repeat(product.rating);

  return (
    <div className="detail-page">
      <div className="product-details-header">
        <h1>Product Details</h1>
        <p>Sample text</p>
      </div>
      <div className="product-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h2>{product.name}</h2>
          <div className="star-rating">{starRating}</div>
          <div className="detail-price">{product.price}</div>
          <p>Get this item with your grocery order.</p>
          <button className="go-back" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
      <div className="accordion">
        <div
          className="accordion-item"
          onClick={() => setShowDescription(!showDescription)}
        >
          <div className="accordion-title">Product Description</div>
          {showDescription && (
            <div className="accordion-content">{product.details}</div>
          )}
        </div>
        <div
          className="accordion-item"
          onClick={() => setShowNutritionIngredients(!showNutritionIngredients)}
        >
          <div className="accordion-title">Nutrition and Ingredients</div>
          {showNutritionIngredients && (
            <div className="accordion-content">
              {product.nutritionIngredients}
            </div>
          )}
        </div>
        <div
          className="accordion-item"
          onClick={() => setShowDisclaimer(!showDisclaimer)}
        >
          <div className="accordion-title">DISCLAIMER</div>
          {showDisclaimer && (
            <div className="accordion-content">
              We do our best to be accurate with respect to the advertised
              ingredients, nutritional information, product images, and
              descriptions listed on our app/website. As this information may be
              changed by manufacturers at any time, we strongly recommend that
              you always read the product packaging carefully for the most
              current and accurate ingredient, nutrition, or other product
              information (including warnings) before using or consuming any
              products. If you have food sensitivities or allergies, you should
              always read the actual product packaging to ensure the safety of
              the product for your situation. Please do not solely rely on the
              information provided on this app/website.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
