import { icons } from '../assets/Assets'
import './AllItemsSection.css'

function AllItemsSection() {
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
            <div className="productcard">
                <div className="productimg">
                    <img src={icons.product1} alt='product1'/>
                </div>
                <div className="productname">
                    <p>Pastry Cake</p>

                </div>
                <div className="productname">
                    <h3>₹ 60</h3>
                </div>
            </div>

            <div className="productcard">
                <div className="productimg">
                    <img src={icons.product2} alt='product1'/>
                </div>
                <div className="productname">
                    <p>Pastry Cake</p>

                </div>
                <div className="productname">
                    <h3>₹ 60</h3>
                </div>
            </div>
            <div className="productcard">
                <div className="productimg">
                    <img src={icons.product3} alt='product1'/>
                </div>
                <div className="productname">
                    <p>Pastry Cake</p>

                </div>
                <div className="productname">
                    <h3>₹ 60</h3>
                </div>
            </div>
            <div className="productcard">
                <div className="productimg">
                    <img src={icons.product4} alt='product1'/>
                </div>
                <div className="productname">
                    <p>Pastry Cake</p>

                </div>
                <div className="productname">
                    <h3>₹ 60</h3>
                </div>
            </div>
            <div className="productcard">
                <div className="productimg">
                    <img src={icons.product5} alt='product1'/>
                </div>
                <div className="productname">
                    <p>Pastry Cake</p>

                </div>
                <div className="productname">
                    <h3>₹ 60</h3>
                </div>
            </div>
            <div className="productcard">
                <div className="productimg">
                    <img src={icons.product6} alt='product1'/>
                </div>
                <div className="productname">
                    <p>Pastry Cake</p>

                </div>
                <div className="productname">
                    <h3>₹ 60</h3>
                </div>
            </div>
            <div className="productcard">
                <div className="productimg">
                    <img src={icons.product7} alt='product1'/>
                </div>
                <div className="productname">
                    <p>Pastry Cake</p>

                </div>
                <div className="productname">
                    <h3>₹ 60</h3>
                </div>
            </div>

            <div className="productcard">
                <div className="productimg">
                    <img src={icons.product8} alt='product1'/>
                </div>
                <div className="productname">
                    <p>Pastry Cake</p>

                </div>
                <div className="productname">
                    <h3>₹ 60</h3>
                </div>
            </div>

        </div>
  
      
    </div>
  )
}

export default AllItemsSection
