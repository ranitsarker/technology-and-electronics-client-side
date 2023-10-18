import { useEffect, useState } from 'react';

const SamsungBrand = () => {
  const [samsungProducts, setSamsungProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product/samsung')
      .then((response) => response.json())
      .then((data) => {
        setSamsungProducts(data);
      })
      .catch((error) => {
        console.error('Error loading Samsung products: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Samsung Products</h1>
      <ul>
        {samsungProducts.map((product) => (
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

export default SamsungBrand;
