import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

function MyCart() {
  const [cartData, setCartData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      const userEmail = user.email;

      fetch(`http://localhost:5000/cart/${userEmail}`)
        .then((response) => response.json())
        .then((data) => setCartData(data))
        .catch((error) => {
          console.error('Error fetching cart data: ', error);
        });
    }
  }, [user]);

  return (
<div className='md:mx-10 mx-4 my-8'>
  <h1 className="text-2xl font-semibold mb-4 ">My Cart</h1>
  {cartData.length > 0 ? (
    <div className="grid grid-cols-1 gap-4">
      {cartData.map((item, index) => (
        <div key={index} className="flex items-center border p-2">
          <img
            src={item.product.image}
            alt="Product"
            className="w-16 h-16 object-contain rounded-md mr-4"
          />
          <div>
            <p className="text-lg font-semibold">{item.product.name}</p>
            <p className="text-gray-600">Price: ${item.product.price}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-600">Your cart is empty.</p>
  )}
</div>

  );
}

export default MyCart;
