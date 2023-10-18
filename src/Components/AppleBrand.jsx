import { useEffect, useState } from 'react';

const AppleBrand = () => {
  const [appleProducts, setAppleProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product/apple')
      .then((response) => response.json())
      .then((data) => {
        setAppleProducts(data);
      })
      .catch((error) => {
        console.error('Error loading Apple products: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Apple Products</h1>
      <ul>
        {appleProducts.map((product) => (
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

export default AppleBrand;
