import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleBrandBanner from './GoogleBrandBanner';

const GoogleBrand = () => {
  const [googleProducts, setGoogleProducts] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
    fetch('https://technology-and-electronics-server-side-o3w7iypcd.vercel.app/product/google') 
      .then((response) => response.json())
      .then((data) => {
        setGoogleProducts(data);
      })
      .catch((error) => {
        console.error('Error loading Google products: ', error);
      });
  }, []);

  const displayedProducts = showAllProducts ? googleProducts : googleProducts.slice(0, 4);

  return (
    <>
      <GoogleBrandBanner /> 
      <div className="text-center container mx-auto">
        <h1 className="text-2xl font-bold my-8">Google Products</h1>
        {googleProducts.length === 0 ? (
          <div className="font-bold my-8">No data found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {displayedProducts.map((product) => (
              <div key={product._id} className="border p-4">
                <img src={product.image} alt={product.name} className="w-full" />
                <p className="font-semibold text-lg mt-2">{product.name}</p>
                <p>Brand: {product.brand}</p>
                <p>Type: {product.type}</p>
                <p>Price: $ {product.price}</p>
                <p>Rating: {product.rating} </p>
                <Link
                  to={`/updateproduct/${product._id}`}
                  className="block text-blue-500 hover:underline mt-2"
                >
                  Update
                </Link>
                <Link
                  to={`/product/${product._id}`}
                  className="block text-blue-500 hover:underline mt-2"
                >
                  Details
                </Link>
              </div>
            ))}
          </div>
        )}
        {googleProducts.length > 4 && !showAllProducts && (
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

export default GoogleBrand;
