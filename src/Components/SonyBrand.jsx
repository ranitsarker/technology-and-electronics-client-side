import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SonyBrand = () => {
  const [sonyProducts, setSonyProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product/sony')
      .then((response) => response.json())
      .then((data) => {
        setSonyProducts(data);
      })
      .catch((error) => {
        console.error('Error loading Sony products: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Sony Products</h1>
      <ul>
        {sonyProducts.map((product) => (
          <div key={product._id}>
            <img src={product.image} alt={product.name} />
            <p>Name: {product.name}</p>
            <p>Brand: {product.brand}</p>
            <p>Type: {product.type}</p>
            <p>Price: {product.price}</p>
            <p>Short Description: {product.shortDescription}</p>
            <p>Rating: {product.rating}</p>
            <Link to={`/updateproduct/${product._id}`}>Update</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SonyBrand;
