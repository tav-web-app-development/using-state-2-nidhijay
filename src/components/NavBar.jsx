import { useState } from 'react';

export default function NavBar({ user, itemsInCart }) {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: ''
  });
  const [billingAddress, setBillingAddress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: ''
  });

  const handleCheckoutClick = () => {
    setShowCheckoutForm(true);
  };

  const handleCheckboxChange = () => {
    setShowCheckoutForm(!showCheckoutForm);
    setBillingAddress(shippingAddress);
  };

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'shipping') {
      setShippingAddress({ ...shippingAddress, [name]: value.trim() });
    } else {
      setBillingAddress({ ...billingAddress, [name]: value.trim() });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    // Perform further actions here, such as sending data to a server
  };

  return (
    <>
      {user ? (
        <span>{`Welcome ${user.firstName} ${user.lastName} `}</span>
      ) : (
        <a href="#">Login </a>
      )}
      <span>{`${itemsInCart} in your cart`}</span>
      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
      <button onClick={handleCheckoutClick}>Checkout</button>
      {showCheckoutForm && (
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={shippingAddress.firstName}
              onChange={(e) => handleChange(e, 'shipping')}
            />
          </label>
          {/* Add other input fields for shipping address */}
          <input type="checkbox" onChange={handleCheckboxChange} />
          <label>Use shipping address as billing address</label>
          {!showCheckoutForm && (
            <div>
              {/* Add input fields for billing address */}
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

