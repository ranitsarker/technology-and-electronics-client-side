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
      <button className="btn btn-primary">add to cart</button>
    </div>
  );
};

export default ProductDetails;
