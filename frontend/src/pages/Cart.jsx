import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1 className="cart-title">Your Cart</h1>
        <div className="cart-empty">
          <p>Your cart is empty</p>
          <Link to="/shop" className="btn-primary" style={{ display: 'inline-block', marginTop: '20px' }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={`${item.id}-${item.size}-${index}`} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-details">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-variant">{item.variant} / Size: {item.size}</p>
              <p className="cart-item-price">${item.price} x {item.quantity}</p>
            </div>
            <button 
              className="cart-item-remove"
              onClick={() => removeFromCart(item.id, item.size)}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <span>Total</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>
        <Link to="/checkout" className="checkout-btn" style={{ display: 'block', textAlign: 'center' }}>
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
