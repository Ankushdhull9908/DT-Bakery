import { useNavigate } from 'react-router-dom';
import { icons } from '../assets/Assets';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import './AllItemsSection.css';

function AllItemsSection() {
  const { AddToCart, setshowcartsidebar, logindata } = useAppContext();
  const nav = useNavigate();

  const products = [
    { id: 1, src: icons.product1, name: "Chocolate Fudge", price: 20 },
    { id: 2, src: icons.product2, name: "Berry Pastry", price: 40 },
    { id: 3, src: icons.product3, name: "Vanilla Glaze", price: 80 },
    { id: 4, src: icons.product4, name: "Red Velvet", price: 30 },
    { id: 5, src: icons.product5, name: "Lemon Tart", price: 100 },
    { id: 6, src: icons.product6, name: "Dark Truffle", price: 60 },
    { id: 7, src: icons.product7, name: "Wedding Special", price: 200 },
    { id: 8, src: icons.product8, name: "Coffee Cake", price: 160 }
  ];

  const handleAddClick = (product) => {
    if (logindata) {
      AddToCart(product);
      setshowcartsidebar(true);
    } else {
      nav('/login');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className='AllItemsSection'>
        <div className="AllitemsSectionheading"><h1>Our Best Seller</h1></div>
        <div className="AllItemsSectionbuttonscollection">
          <div className="AllItemssectionbutton"><h4>NEW ARRIVALS</h4></div>
          <div className="AllItemssectionbutton"><h4>BEST SELLER</h4></div>
          <div className="AllItemssectionbutton"><h4>TOP RATED</h4></div>
        </div>

        <div className="productscollection">
          {products.map((item) => (
            <div className="productcard" key={item.id}>
              <div className="productimg">
                <img src={item.src} alt={item.name}  onClick={() => nav(`/item/${item.id}`, { state: { item, products } })}
                style={{ cursor: 'pointer' }}/>
                <div className="cardfavaddtocart">
                  <div className="productcardactionicon"><img src={icons.heart} alt='fav' /></div>
                  <div className="productcardactionicon" onClick={() => handleAddClick(item)}>
                    <img src={icons.bag} alt='add' />
                  </div>
                  <div className="productcardactionicon"><img src={icons.search} alt='view' /></div>
                </div>
              </div>
              <div className="productname"><p>{item.name}</p></div>
              <div className="productname"><h3>₹ {item.price}</h3></div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default AllItemsSection;