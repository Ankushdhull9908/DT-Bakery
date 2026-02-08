import { icons } from '../assets/Assets'
import { useAppContext } from '../context/AppContext'
import './CartSidebar.css'

function CartSidebar() {
    const {showcartsidebar,setshowcartsidebar,width} =useAppContext()
  return (
    <div className='cartsidebar' style={{right:showcartsidebar ? '0vw':width>=600? '-40vw':'-100vw'}}>
        <div className="carttopheading">
            <div className="closecartsidebar">
                <img src={icons.close} alt='close' onClick={()=> setshowcartsidebar(false)}/>
            </div>
            <h2>Shopping Cart</h2>
            <div className="closecartsidebar">
            <p>3</p>
            </div>

        </div>
        <div className="cartitems">

        </div>
        <div className="cartbottom">
            <div className="carttotal">
             <h2>Total</h2>
             <h2 style={{color:'brown'}}></h2>
            </div>
            <div className="viewcartandcheckout">
                <div className="cartviewcart">
                  <h4>View Cart</h4>
                </div>
                <div className="cartcheckout">
                    <h4>Check out</h4>
                </div>

            </div>

        </div>

    
    </div>
  )
}

export default CartSidebar
