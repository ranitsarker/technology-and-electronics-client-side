import { useEffect, useState } from 'react';

const GoogleBrand = () => {
  const [googleProducts, setGoogleProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product/google')
      .then((response) => response.json())
      .then((data) => {
        setGoogleProducts(data);
      })
      .catch((error) => {
        console.error('Error loading Google products: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Google Products</h1>
      <ul>
        {googleProducts.map((product) => (
          <div key={product._id}>
            <img src={product.image} alt={product.name} />
            <p>Name: {product.name}</p>
            <p>Brand: {product.brand}</p>
            <p>Type: {product.type}</p>
            <p>Price: {product.price}</p>
            <p>Short Description: {product.shortDescription}</p>
            <p>Rating: {product.rating}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GoogleBrand;
