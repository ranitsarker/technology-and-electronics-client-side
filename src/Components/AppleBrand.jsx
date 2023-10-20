import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppleBrandBanner from './AppleBrandBanner';

const AppleBrand = () => {
  const [appleProducts, setAppleProducts] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(false);

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

  const displayedProducts = showAllProducts ? appleProducts : appleProducts.slice(0, 4);

  return (
    <>
      <AppleBrandBanner></AppleBrandBanner>
      <div className="text-center container mx-auto">
        <h1 className="text-2xl font-bold my-8">Apple Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedProducts.map((product) => (
            <div key={product._id} className="border p-4">
              <img src={product.image} alt={product.name} className="w-full" />
              <p className="font-semibold text-lg mt-2">{product.name}</p>
              <p>Brand: {product.brand}</p>
              <p>Type: {product.type}</p>
              <p>Price: {product.price}</p>
              <p>Rating: {product.rating}</p>
              <Link
                to={`/updateproduct/${product._id}`}
                className="block text-blue-500 hover:underline mt-2"
              >
                Update
              </Link>
              <Link 
              to={`/product/${product._id}`} 
              className="block text-blue-500 hover:underline mt-2">Details</Link>
            </div>
          ))}
        </div>
        {appleProducts.length > 4 && !showAllProducts && (
          <button
            onClick={() => setShowAllProducts(true)}
            className="mt-4 text-blue-500 hover:underline my-8"
          >
            Load More
          </button>
        )}
      </div>
    </>

  );
};

export default AppleBrand;
