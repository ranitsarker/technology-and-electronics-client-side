import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { user } = useContext(AuthContext); // Get the user object from your authentication context

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error('Error loading product details: ', error);
      });
  }, [id]);

  const addToCart = () => {
    if (product && user) {
      const userEmail = user.email; // Get the user's email
      const productToAdd = {
        email: userEmail,
        product: product,
      };

      // Make a POST request to add the product to the cart
      fetch('http://localhost:5000/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productToAdd),
      })
        .then((response) => response.json())
        .then((data) => {
          toast.success(data.message);
        })
        .catch((error) => {
          console.error('Error adding product to cart: ', error);
          toast.error('Failed to add product to the cart');
        });
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
<div className="container mx-auto">
  <div className="flex items-center">
    <div className="w-full p-4">
      <div className="flex flex-col md:flex-row"> {/* Flex container for image and text */}
        <div className="w-full md:w-1/2 p-4">
          <img src={product.image} alt="" className="w-full mx-auto" />
        </div>
        <div className="w-full md:w-1/2 p-4 md:mt-8">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p>Brand: {product.brand}</p>
          <p>Type: {product.type}</p>
          <p>Price: {product.price}</p>
          <p>Short Description: {product.shortDescription}</p>
          <p>Rating: {product.rating}</p>
          <button className="btn btn-outline mt-4" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>


  );
};

export default ProductDetails;
