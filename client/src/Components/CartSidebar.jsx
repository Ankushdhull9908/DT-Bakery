import { useNavigate } from 'react-router-dom';
import { icons } from '../assets/Assets';
import { useAppContext } from '../context/AppContext';
import './CartSidebar.css';

function CartSidebar() {
  const nav = useNavigate();
  const { updateQTY, removeItem, showcartsidebar, setshowcartsidebar, width, cart, cartTotal } = useAppContext();

  return (
    <div className='cartsidebar' style={{ right: showcartsidebar ? '0' : (width >= 600 ? '-40vw' : '-100vw') }}>
      <div className="carttopheading">
        <div className="closecartsidebar">
          <img src={icons.close} alt='close' onClick={() => setshowcartsidebar(false)} />
        </div>
        <h2>Shopping Cart</h2>
        <div className="closecartsidebar"><p>{cart?.length}</p></div>
      </div>

      <div className="cartitems">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div className="cartitem" key={item.id}>
              <div className="cartitemimage">
                <img src={item.src} alt={item.name} />
              </div>
              <div className="cartitemmainfields">
                <div className="cartitemname"><p>{item.name}</p></div>
                <div className="cartitemname">
                  <div className="qty-controls" style={{display:'flex', alignItems:'center', gap:'10px'}}>
                    <button onClick={() => updateQTY(item.id, 'minus')} style={{cursor:'pointer'}}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQTY(item.id, 'plus')} style={{cursor:'pointer'}}>+</button>
                  </div>
                </div>
                <div className="cartitemname">
                  <h3>₹ {item.price * item.qty}</h3>
                </div>
              </div>
              <div className="cartitemdeletebtn" onClick={() => removeItem(item.id)} style={{cursor:'pointer'}}>
                <img src={icons.delete1} alt='delete' style={{ height: '15px', width: '15px' }} />
              </div>
            </div>
          ))
        ) : (
          <div style={{textAlign:'center', marginTop:'50px'}}>Your cart is empty</div>
        )}
      </div>

      <div className="cartbottom">
        <div className="carttotal">
          <h2>Total</h2>
          <h2 style={{ color: 'brown' }}>₹ {cartTotal}</h2>
        </div>
        <div className="viewcartandcheckout">
          <div className="cartviewcart" onClick={() => { setshowcartsidebar(false); nav('/cart'); }}>
            <h4>View Cart</h4>
          </div>
          <div className="cartcheckout" onClick={() => { setshowcartsidebar(false); nav('/checkout'); }}>
            <h4>Check out</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSidebar;