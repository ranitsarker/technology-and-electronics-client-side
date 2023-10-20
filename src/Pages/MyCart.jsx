import { useEffect, useState } from 'react';

function MyCart() {
  const [cartData, setCartData] = useState([]);
  const userEmail = 'user12@gmail.com'; // Replace with the user's actual email

  useEffect(() => {
    fetch(`http://localhost:5000/cart/${userEmail}`)
      .then((response) => response.json())
      .then((data) => setCartData(data))
      .catch((error) => {
        console.error('Error fetching cart data: ', error);
      });
  }, [userEmail]);

  return (
    <div>
      <h1>My Cart</h1>
      {cartData.map((item, index) => (
        <div key={index}>
          <img src={item.product.image} alt="Product" />
          <p>Name: {item.product.name}</p>
          <p>Price: ${item.product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default MyCart;
