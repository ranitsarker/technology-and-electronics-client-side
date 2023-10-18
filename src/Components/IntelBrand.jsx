import { useEffect, useState } from 'react';

const IntelBrand = () => {
  const [intelProducts, setIntelProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product/intel')
      .then((response) => response.json())
      .then((data) => {
        setIntelProducts(data);
      })
      .catch((error) => {
        console.error('Error loading Intel products: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Intel Products</h1>
      <ul>
        {intelProducts.map((product) => (
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

export default IntelBrand;
