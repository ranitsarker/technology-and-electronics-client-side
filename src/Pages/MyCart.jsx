const MyCart = () => {
  // Retrieve cart items from localStorage or initialize an empty array
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const removeFromCart = (index) => {
    // Create a copy of the current cart and remove the item at the specified index
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);

    // Update localStorage with the updated cart
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Force a re-render to update the cart display
    window.location.reload();
  };
  return (
    <div>
      <h1>My Cart</h1>
      {cartItems.map((item, index) => (
        <div key={index}>
          {/* Display cart item details here */}
          <p>Name: {item.name}</p>
          <p>Price: {item.price}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>

        </div>
      ))}
    </div>
  );
};

export default MyCart;
