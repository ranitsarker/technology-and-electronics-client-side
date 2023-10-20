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
    <div className="container mx-auto md:p-8 p-2">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>
      {cartItems.length === 0 ? (
        <p className="font-bold">No data found</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item p-10 bg-slate-300">
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} className="w-20 h-20" />
            </div>
            <div className="cart-item-details">
              <p className="font-bold">{item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: 1</p>
              <button className="btn btn-outline my-4" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyCart;
