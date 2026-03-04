import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { useAppContext } from "../context/AppContext";

const Checkout = () => {
  // 1. Pull real data from AppContext
  const { cart, cartTotal, logindata } = useAppContext();
  
  // 2. State to manage form inputs
  const [contactInfo, setContactInfo] = useState({
    emailOrPhone: "",
    emailOffers: false,
  });

  const [deliveryInfo, setDeliveryInfo] = useState({
    country: "United States",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    saveInfo: false,
  });

  // 3. Effect to pre-fill email if logindata exists
  useEffect(() => {
    if (logindata && logindata.email) {
      setContactInfo((prev) => ({ ...prev, emailOrPhone: logindata.email }));
    }
  }, [logindata]);

  const handleContactChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContactInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDeliveryChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDeliveryInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // Final data object to send to your backend
    const orderData = {
      customer: contactInfo,
      shipping: deliveryInfo,
      items: cart,
      totalAmount: cartTotal,
    };
    console.log("Placing Order with data:", orderData);
    alert("Order placed successfully! Check console for data.");
  };

  return (
    <div className="ckozy-checkout-wrapper">
      <div className="ckozy-container">
        
        <main className="ckozy-checkout-main">
          
          {/* Left Column: Forms */}
          <div className="ckozy-checkout-forms-column">
            
            {/* Contact Section */}
            <section className="ckozy-checkout-section ckozy-contact-section">
              <h2 className="ckozy-section-title">Contact</h2>
              <div className="ckozy-input-group">
                <input
                  type="text"
                  name="emailOrPhone"
                  value={contactInfo.emailOrPhone}
                  onChange={handleContactChange}
                  placeholder="Email or mobile phone number"
                  className="ckozy-form-input ckozy-main-input"
                />
              </div>
              <div className="ckozy-checkbox-group">
                <input
                  type="checkbox"
                  id="ckozy-email-offers"
                  name="emailOffers"
                  checked={contactInfo.emailOffers}
                  onChange={handleContactChange}
                />
                <label htmlFor="ckozy-email-offers">Email me with news and offers</label>
              </div>
            </section>

            {/* Delivery Section */}
            <section className="ckozy-checkout-section ckozy-delivery-section">
              <h2 className="ckozy-section-title">Delivery</h2>
              <div className="ckozy-input-group">
                <select 
                    name="country" 
                    value={deliveryInfo.country} 
                    onChange={handleDeliveryChange} 
                    className="ckozy-form-input"
                >
                  <option value="United States">United States</option>
                  <option value="India">India</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>
              <div className="ckozy-input-row">
                <input
                  type="text"
                  name="firstName"
                  value={deliveryInfo.firstName}
                  onChange={handleDeliveryChange}
                  placeholder="First name (optional)"
                  className="ckozy-form-input"
                />
                <input
                  type="text"
                  name="lastName"
                  value={deliveryInfo.lastName}
                  onChange={handleDeliveryChange}
                  placeholder="Last name"
                  className="ckozy-form-input"
                />
              </div>
              <div className="ckozy-input-group">
                <input
                  type="text"
                  name="address"
                  value={deliveryInfo.address}
                  onChange={handleDeliveryChange}
                  placeholder="Address"
                  className="ckozy-form-input"
                />
              </div>
              <div className="ckozy-input-group">
                <input
                  type="text"
                  name="apartment"
                  value={deliveryInfo.apartment}
                  onChange={handleDeliveryChange}
                  placeholder="Apartment, suite, etc. (optional)"
                  className="ckozy-form-input"
                />
              </div>
              <div className="ckozy-input-row ckozy-input-row-three">
                <input
                  type="text"
                  name="city"
                  value={deliveryInfo.city}
                  onChange={handleDeliveryChange}
                  placeholder="City"
                  className="ckozy-form-input"
                />
                <input
                  type="text"
                  name="state"
                  value={deliveryInfo.state}
                  onChange={handleDeliveryChange}
                  placeholder="State"
                  className="ckozy-form-input"
                />
                <input
                  type="text"
                  name="zipCode"
                  value={deliveryInfo.zipCode}
                  onChange={handleDeliveryChange}
                  placeholder="ZIP code"
                  className="ckozy-form-input"
                />
              </div>
              <div className="ckozy-checkbox-group">
                <input
                  type="checkbox"
                  id="ckozy-save-info"
                  name="saveInfo"
                  checked={deliveryInfo.saveInfo}
                  onChange={handleDeliveryChange}
                />
                <label htmlFor="ckozy-save-info">Save this information for next time</label>
              </div>
            </section>
            
            <section className="ckozy-checkout-section ckozy-shipping-method-section">
                <h2 className="ckozy-section-title">Shipping method</h2>
                <div className="ckozy-placeholder-box">
                    {deliveryInfo.address ? "Standard Shipping - Free" : "Enter a shipping address to view shipping methods"}
                </div>
            </section>
            
          </div>

          {/* Right Column: Order Summary */}
          <aside className="ckozy-order-summary-column">
            
            {/* 4. Real Cart Items List */}
            <div className="ckozy-summary-products">
              {cart.length > 0 ? cart.map((item) => (
                <div className="ckozy-summary-product-item" key={item.id}>
                  <div className="ckozy-summary-product-thumb">
                    {/* item.src matches your context structure */}
                    <img src={item.src} alt={item.name} />
                    <span className="ckozy-product-qty">{item.qty}</span>
                  </div>
                  <span className="ckozy-summary-product-title">{item.name}</span>
                  <span className="ckozy-summary-product-price">₹ {(item.price * item.qty).toFixed(2)}</span>
                </div>
              )) : (
                <p>Your cart is empty</p>
              )}
            </div>
            
            {/* 5. Real Totals Section */}
            <div className="ckozy-summary-totals">
              <div className="ckozy-totals-row">
                <span className="ckozy-totals-label">Subtotal</span>
                <span className="ckozy-totals-value">₹ {cartTotal.toFixed(2)}</span>
              </div>
              <div className="ckozy-totals-row">
                <span className="ckozy-totals-label">Shipping</span>
                <span className="ckozy-totals-value ckozy-shipping-info">
                  {deliveryInfo.address ? "Free" : "Calculated at next step"}
                </span>
              </div>
              <div className="ckozy-totals-row ckozy-final-total">
                <span className="ckozy-totals-label">Total</span>
                <div className="ckozy-total-with-currency">
                    <span className="ckozy-currency">INR</span>
                    <span className="ckozy-totals-value">₹ {cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <button 
              className="ckozy-btn-place-order" 
              onClick={handlePlaceOrder}
              disabled={cart.length === 0}
            >
              Complete Order
            </button>
            
          </aside>

        </main>
      </div>
    </div>
  );
};

export default Checkout;