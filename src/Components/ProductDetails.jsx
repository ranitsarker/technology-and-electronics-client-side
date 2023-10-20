import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://technology-and-electronics-server-side-lugjmequ0.vercel.app/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error('Error loading product details: ', error);
      });
  }, [id]);

  const addToCart = () => {
    if (product) {
      // Fetch the existing cart from localStorage or initialize an empty array
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

      // Add the product to the cart
      existingCart.push(product);

      // Update localStorage with the updated cart
      localStorage.setItem('cart', JSON.stringify(existingCart));

      toast.success('Product added to the cart');
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex items-center">
        <div className="w-full md:w-2/3 lg:w-1/2 p-4">
          <img src={product.image} alt="" className="w-full mx-auto" />
        </div>
        <div className="w-full md:w-1/3 lg:w-1/2 p-4">
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
  );
};

export default ProductDetails;
