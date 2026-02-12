import { useNavigate } from 'react-router-dom'
import { icons } from '../assets/Assets'
import { useAppContext } from '../context/AppContext'
import './CartSidebar.css'

function CartSidebar() {
    const nav = useNavigate()
    const {increaseandDecreaseQTY,showcartsidebar,setshowcartsidebar,width,cart,cartTotal} =useAppContext()
  return (
    <div className='cartsidebar' style={{right:showcartsidebar ? '0vw':width>=600? '-40vw':'-100vw'}}>
        <div className="carttopheading">
            <div className="closecartsidebar">
                <img src={icons.close} alt='close' onClick={()=> setshowcartsidebar(false)}/>
            </div>
            <h2>Shopping Cart</h2>
            <div className="closecartsidebar">
            <p>{cart?.length}</p>
            </div>

        </div>
        <div className="cartitems">
            {
                  cart?.length>0 ? (cart.map((i,key)=>{
                    return(<div className="cartitem">
                <div className="cartitemimage">
                    <img src={i.src} alt='cart item image'/>
                </div>
                <div className="cartitemmainfields">
                        <div className="cartitemname">
                    <p>{i.name}</p>

                </div>
                <div className="cartitemname">
                    <p>QTY: 1</p>
                    <button onClick={()=> increaseandDecreaseQTY('minus',i)}>-</button>
                    <button onClick={()=>increaseandDecreaseQTY('plus',i)}>+</button>
                </div>
                <div className="cartitemname">
                    <h3>₹ {i.price}</h3>
                </div>
                </div>
                <div className="cartitemdeletebtn">
                    <img src={icons.delete1} alt='cart delete icon' style={{height:'15px',width:'15px'}}/>
                </div>
                

            </div>)
                  })):'Add Something in cart'
            }
            
            
        

        </div>
        <div className="cartbottom">
            <div className="carttotal">
             <h2>Total</h2>
             <h2 style={{color:'brown'}}>₹ {cartTotal}</h2>
            </div>
            <div className="viewcartandcheckout">
                <div className="cartviewcart" onClick={()=> {setshowcartsidebar(false),
                    nav('/cart')}}>
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
