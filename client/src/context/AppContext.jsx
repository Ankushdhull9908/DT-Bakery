import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showmenu, setshowmenu] = useState(false);
  const [showcartsidebar, setshowcartsidebar] = useState(false);
  const [cart, setcart] = useState([]);
  const [cartTotal, setcartTotal] = useState(0);
  const [logindata, setlogindata] = useState(null);

  // 1. Sync Body Scroll
  useEffect(() => {
    document.body.style.overflowY = (showcartsidebar || showmenu) ? "hidden" : "auto";
  }, [showcartsidebar, showmenu]);

  // 2. Load User Data
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userdata'));
    if (data) setlogindata(data);
  }, []);

  // 3. Handle Window Resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 4. Calculate Total Price
  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    setcartTotal(total);
  }, [cart]);

  // 5. Cart Logic Functions
  const AddToCart = (product) => {
    setcart((prevCart) => {
      const isItemInCart = prevCart.find((item) => item.id === product.id);
      if (isItemInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const updateQTY = (id, operation) => {
    setcart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = operation === "plus" ? item.qty + 1 : item.qty - 1;
            return { ...item, qty: newQty };
          }
          return item;
        })
        .filter((item) => item.qty > 0); // Remove item if qty becomes 0
    });
  };

  const removeItem = (id) => {
    setcart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const value = {
    width, showmenu, setshowmenu,
    showcartsidebar, setshowcartsidebar,
    cart, setcart, cartTotal,
    logindata, setlogindata,
    AddToCart, updateQTY, removeItem
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);