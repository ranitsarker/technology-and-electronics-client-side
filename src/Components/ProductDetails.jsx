import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error('Error loading product details: ', error);
      });
  }, [id]);

  const addToCart = () => {
    if (product) {
      // Fetch the existing cart from localStorage or initialize an empty array
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

      // Add the product to the cart
      existingCart.push(product);

      // Update localStorage with the updated cart
      localStorage.setItem('cart', JSON.stringify(existingCart));
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <img src={product.image} alt="" />
      <p>Name: {product.name}</p>
      <p>Brand: {product.brand}</p>
      <p>Type: {product.type}</p>
      <p>Price: {product.price}</p>
      <p>Short Description: {product.shortDescription}</p>
      <p>Rating: {product.rating}</p>
      <button className="btn btn-primary" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
