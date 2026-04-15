import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { icons } from '../assets/Assets';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import './ItemDetail.css';

function ItemDetail() {
  const { id } = useParams();
  const { state } = useLocation();
  const nav = useNavigate();
  const { AddToCart, updateQTY, removeItem, cart, setshowcartsidebar, logindata } = useAppContext();

  const allProducts = state?.products || [];
  const item = state?.item || allProducts.find(p => p.id === Number(id));

  // Scroll to top on every navigation to this page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const [activeImg, setActiveImg] = useState(item?.src);
  const [activeTab, setActiveTab] = useState('description');

  // Sync quantity from global cart instead of local state
  const cartItem = cart.find(c => c.id === item?.id);
  const quantity = cartItem?.qty || 0;

  if (!item) return <div className="id-notfound">Product not found.</div>;

  const previewImages = [item.src, item.src, item.src, item.src];
  const suggested = allProducts.filter(p => p.id !== item.id);

  // Cart actions — all synced with global cart
  const handleAdd = () => {
    if (!logindata) { nav('/login'); return; }
    AddToCart(item);
    setshowcartsidebar(true);
  };

  const handleIncrease = () => {
    if (!logindata) { nav('/login'); return; }
    if (quantity === 0) {
      AddToCart(item);
    } else {
      updateQTY(item.id, 'plus');
    }
  };

  const handleDecrease = () => {
    if (quantity === 0) return;
    updateQTY(item.id, 'minus');
  };

  const handleBuyNow = () => {
    if (!logindata) { nav('/login'); return; }
    if (quantity === 0) AddToCart(item);
    setshowcartsidebar(true);
  };

  const handleSuggestedClick = (p) => {
    nav(`/item/${p.id}`, { state: { item: p, products: allProducts } });
    // scroll is handled by the useEffect above on id change
  };

  const tabContent = {
    description: `Our ${item.name} is handcrafted daily using the finest ingredients — rich Belgian chocolate, farm-fresh eggs, and hand-picked seasonal flavors. Each piece is baked to perfection in our artisan kitchen, ensuring a melt-in-your-mouth experience with every bite. Perfect for gifting, celebrations, or a personal indulgence.`,
    ingredients: `Flour, Sugar, Butter, Eggs, Milk, ${item.name.split(' ')[0]} Essence, Baking Soda, Vanilla Extract, Salt. All ingredients are sourced locally and free from artificial preservatives.`,
    delivery: `• Fresh baked daily — order before 2 PM for same-day delivery\n• Standard delivery: 2–3 hours\n• Express delivery available at checkout\n• Packaged in eco-friendly insulated boxes to maintain freshness`,
  };

  return (
    <div className="item-detail-page">

      {/* Breadcrumb */}
      <div className="id-breadcrumb">
        <span onClick={() => nav('/')}>Home</span>
        <span> / </span>
        <span onClick={() => nav(-1)}>Shop</span>
        <span> / </span>
        <span className="id-breadcrumb-active">{item.name}</span>
      </div>

      {/* Main Section */}
      <motion.div
        className="id-main"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* LEFT — Image Gallery */}
        <div className="id-gallery">
          <div className="id-thumbnails">
            {previewImages.map((src, i) => (
              <div
                key={i}
                className={`id-thumb ${activeImg === src ? 'active' : ''}`}
                onMouseEnter={() => setActiveImg(src)}
                onClick={() => setActiveImg(src)}
              >
                <img src={src} alt={`preview-${i}`} />
              </div>
            ))}
          </div>
          <div className="id-main-img">
            <motion.img
              key={activeImg}
              src={activeImg}
              alt={item.name}
              initial={{ opacity: 0.6, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            />
            <div className="id-badge">Best Seller</div>
          </div>
        </div>

        {/* RIGHT — Product Details */}
        <div className="id-details">
          <p className="id-category">Artisan Bakery</p>
          <h1 className="id-title">{item.name}</h1>

          <div className="id-rating">
            {'★★★★☆'}
            <span className="id-rating-count">(128 reviews)</span>
          </div>

          <div className="id-price-row">
            <span className="id-price">₹{item.price}</span>
            <span className="id-original-price">₹{item.price + 40}</span>
            <span className="id-discount">Save ₹40</span>
          </div>

          <p className="id-short-desc">
            Freshly baked every morning. Made with premium ingredients, no preservatives.
          </p>

          <div className="id-divider" />

          {/* Quantity — synced with global cart */}
          <div className="id-quantity-row">
            <span className="id-label">Quantity</span>
            <div className="id-qty-control">
              <button onClick={handleDecrease} disabled={quantity === 0}>−</button>
              <span>{quantity}</span>
              <button onClick={handleIncrease}>+</button>
            </div>
            {quantity > 0 && (
              <span className="id-in-cart">✓ {quantity} in cart</span>
            )}
          </div>

          {/* Actions */}
          <div className="id-actions">
            {quantity === 0 ? (
              <button className="id-btn-cart" onClick={handleAdd}>Add to Cart</button>
            ) : (
              <button className="id-btn-cart id-btn-cart--added" onClick={() => setshowcartsidebar(true)}>
                View Cart ({quantity})
              </button>
            )}
            <button className="id-btn-buy" onClick={handleBuyNow}>Buy Now</button>
            <button className="id-btn-wish">♡</button>
          </div>

          {/* Meta info */}
          <div className="id-meta">
            <div className="id-meta-item">
              <span className="id-meta-icon">🚚</span>
              <span>Free delivery on orders above ₹299</span>
            </div>
            <div className="id-meta-item">
              <span className="id-meta-icon">✦</span>
              <span>Baked fresh — same day delivery before 2 PM</span>
            </div>
            <div className="id-meta-item">
              <span className="id-meta-icon">🎁</span>
              <span>Gift wrapping available at checkout</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="id-tabs-section">
        <div className="id-tabs">
          {['description', 'ingredients', 'delivery'].map(tab => (
            <button
              key={tab}
              className={`id-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <motion.div
          className="id-tab-content"
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {tabContent[activeTab].split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </motion.div>
      </div>

      {/* Suggested Products */}
      {suggested.length > 0 && (
        <div className="id-suggested">
          <h2 className="id-suggested-title">You Might Also Like</h2>
          <div className="id-suggested-grid">
            {suggested.map(p => (
              <motion.div
                className="id-sug-card"
                key={p.id}
                whileHover={{ y: -4 }}
                onClick={() => handleSuggestedClick(p)}
              >
                <div className="id-sug-img">
                  <img src={p.src} alt={p.name} />
                </div>
                <p className="id-sug-name">{p.name}</p>
                <p className="id-sug-price">₹{p.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default ItemDetail;