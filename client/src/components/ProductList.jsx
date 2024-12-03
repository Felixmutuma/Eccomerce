import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const ProductList = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products"); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleAddToCartClick = (product) => {
    handleAddToCart(product);
  };

  const handleBuyNow = (productId) => {
    navigate(`/product/${productId}/checkout`);
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image_url || "https://via.placeholder.com/150"}
              alt={product.name}
            />
            <h3>{product.category_name}</h3>
            <p>{product.name}</p>
            <p>
              <strong>${product.price}</strong>
            </p>
            <div className="product-actions">
              <button
                className="buy-btn"
                onClick={() => handleBuyNow(product.id)}
              >
                Buy Now
              </button>
              <button className="cart-btn" onClick={handleAddToCartClick}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
