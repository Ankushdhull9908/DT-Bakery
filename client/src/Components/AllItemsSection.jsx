
import { icons } from '../assets/Assets'
import { useAppContext } from '../context/AppContext'
import './AllItemsSection.css'

function AllItemsSection() {

    const {AddToCart,setshowcartsidebar} = useAppContext()
    const products = [{src:icons.product1,name:"Pastry Cake",price:20},
        ,{src:icons.product2,name:"Pastry Cake",price:40},{src:icons.product3,name:"Pastry Cake",price:80},{src:icons.product4,name:"Pastry Cake",price:30},
        {src:icons.product5,name:"Pastry Cake",price:100},{src:icons.product6,name:"Pastry Cake",price:60},
        {src:icons.product7,name:"Pastry Cake",price:200},{src:icons.product8,name:"Pastry Cake",price:160}]
  return (
    <div className='AllItemsSection'>
    <div className="AllitemsSectionheading">
        <h1>Our Best Seller</h1>
    </div>
   
        <div className="AllItemsSectionbuttonscollection">
            <div className="AllItemssectionbutton">
                <h4>NEW ARRIVALS</h4>
            </div>
            <div className="AllItemssectionbutton">
               <h4>BEST SELLER</h4>
            </div>
            <div className="AllItemssectionbutton">
                <h4>TOP RATES</h4>
            </div>
        </div>
        <div className="productscollection">
            {
                products.map((index,key)=>{
                        return(<div className="productcard" key={key}>
                <div className="productimg" >
                    <img src={index.src} alt='product1'/>
                    <div className="cardfavaddtocart">
                         <div className="productcardactionicon">
                            <img src={icons.heart} alt='heart'/>
                         </div>
                         <div className="productcardactionicon">
                            <img src={icons.bag} alt='bag' onClick={()=> {AddToCart(index),
                            setshowcartsidebar(true)
                        }}/>
                         </div>
                         <div className="productcardactionicon">
                            <img src={icons.search} alt='search'/>
                         </div>
                    </div>
                
                </div>
                <div className="productname">
                    <p>{index.name}</p>

                </div>
                <div className="productname">
                    <h3>₹ {index.price}</h3>
                </div>
                
            </div>)
                })
            }
            
        </div>
  
      
    </div>
  )
}

export default AllItemsSection
