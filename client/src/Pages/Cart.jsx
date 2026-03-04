import React, { useEffect } from "react";
import "./CartPage.css";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom"; // Use Link for internal navigation

const Cart = () => {
  // Destructure the correct names from your AppContext
  const { 
    cart, 
    setcart, 
    cartTotal, 
    updateQTY, 
    removeItem 
  } = useAppContext();

  // Recalculate the cart total whenever the cart changes
  // Note: We already do this in AppContext, but we can keep it here 
  // if you want to be extra safe, or just rely on the context value.

  // Function to handle manual input change
  const handleQuantityChange = (id, value) => {
    const newQty = parseInt(value);
    if (isNaN(newQty) || newQty < 1) return;

    setcart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };

  return (
    <div className="cart-page-wrapper">
      <div className="container">
        {/* Breadcrumbs Section */}
        <nav className="cart-breadcrumbs">
          <Link to="/">Home</Link> <span className="breadcrumb-separator">›</span> <span className="current-crumb">Your Shopping Cart</span>
        </nav>

        <section className="main-cart-content">
          {/* Main Product Table */}
          <div className="cart-table-container">
            <table className="cart-table">
              <thead>
                <tr>
                  <th className="col-product-name">PRODUCT NAME</th>
                  <th className="col-price">PRICE</th>
                  <th className="col-quantity">QUANTITY</th>
                  <th className="col-total">TOTAL</th>
                  <th className="col-remove"></th>
                </tr>
              </thead>
              <tbody>
                {/* Fixed the map error by using 'cart' and adding a null check */}
                {cart && cart.length > 0 ? (
                  cart.map((item) => (
                    <tr key={item.id} className="cart-item">
                      <td className="item-product-data">
                        <div className="item-product-info">
                          {/* Changed item.image to item.src to match your product objects */}
                          <img src={item.src} alt={item.name} className="product-thumb" />
                          <span className="product-title">{item.name}</span>
                        </div>
                      </td>
                      <td className="item-price" data-label="PRICE">
                        ₹ {item.price.toFixed(2)}
                      </td>
                      <td className="item-quantity" data-label="QUANTITY">
                        <div className="qty-wrapper">
                          <input
                            type="number"
                            value={item.qty} // Changed from item.quantity to item.qty
                            min="1"
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            className="qty-input"
                          />
                          <div className="qty-arrows">
                            <span className="arrow-up" onClick={() => updateQTY(item.id, "plus")}>▲</span>
                            <span className="arrow-down" onClick={() => updateQTY(item.id, "minus")}>▼</span>
                          </div>
                        </div>
                      </td>
                      <td className="item-total" data-label="TOTAL">
                        ₹ {(item.price * item.qty).toFixed(2)}
                      </td>
                      <td className="item-remove">
                        {/* Using the removeItem function from context */}
                        <button className="remove-btn" onClick={() => removeItem(item.id)}>✕</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '50px' }}>
                      Your cart is currently empty.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Action Buttons Section */}
          <div className="cart-main-actions">
            <button className="btn-black">UPDATE CART</button>
            <Link to="/shop" className="btn-brown btn-continue">CONTINUE SHOPPING</Link>
          </div>

          {/* Cart Totals Section */}
          <div className="cart-totals-section">
            <div className="totals-title-container">
              <h3>CART TOTALS</h3>
            </div>
            <div className="totals-data-row">
              <span className="totals-label">Total</span>
              <span className="totals-value" id="final-cart-total">₹ {cartTotal.toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="btn-brown btn-checkout">PROCEED TO CHECKOUT</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;