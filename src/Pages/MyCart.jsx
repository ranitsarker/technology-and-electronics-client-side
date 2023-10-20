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
    <div>
      <h1>My Cart</h1>
      {cartData.length > 0 ? (
        cartData.map((item, index) => (
          <div key={index}>
            <img src={item.product.image} alt="Product" />
            <p>Name: {item.product.name}</p>
            <p>Price: ${item.product.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default MyCart;
