import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MicrosoftBrand = () => {
  const [microsoftProducts, setMicrosoftProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product/microsoft')
      .then((response) => response.json())
      .then((data) => {
        setMicrosoftProducts(data);
      })
      .catch((error) => {
        console.error('Error loading Microsoft products: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Microsoft Products</h1>
      <ul>
        {microsoftProducts.map((product) => (
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

export default MicrosoftBrand;
