import { createContext, use, useContext, useEffect, useRef, useState } from "react";

/* 1. Create Context */
const AppContext = createContext();

/* 2. Provider Component */
export const AppProvider = ({ children }) => {

  // Global states
   const [width, setWidth] = useState(window.innerWidth);
   const [showmenu,setshowmenu] = useState(false)
   const [showcartsidebar,setshowcartsidebar] = useState(false)
   const [cart,setcart] = useState([])
   const [cartTotal,setcartTotal] = useState(0)
   const [logindata,setlogindata]=useState(null)
   

  useEffect(() => {
  if (showcartsidebar || showmenu) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
}, [showcartsidebar, showmenu]);

function increaseandDecreaseQTY(operation,cartindex)
{
    const copy = {...cartindex}
    copy.name ="It changed"

    console.log(copy)


    setcart([...cart,copy])
    
}

useEffect(()=>{

  const data = JSON.parse(localStorage.getItem('userdata'))

  !data ? setlogindata(null) : setlogindata(data)

},[])


   useEffect(()=>{

    setcartTotal(cart.map((i)=> i.price))

   },[cart])

   function AddToCart(index)
   {
    setcart([...cart,index])

    
   }

   console.log('cart',cart)
     useEffect(() => {
     const handleResize = () => {
       
       setWidth(window.innerWidth);
     };
   
     // run once on mount
     handleResize();
   
     // listen to resize
     window.addEventListener("resize", handleResize);
   
     // cleanup (very important)
     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);


   console.log('user data',logindata)

   


  // Values you want globally available
  const value = {
    width,increaseandDecreaseQTY,
    showmenu,setshowmenu,showcartsidebar,setshowcartsidebar,cart,setcart,AddToCart,cartTotal,setcartTotal,logindata,setlogindata
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

/* 3. Custom hook (VERY IMPORTANT) */
export const useAppContext = () => {
  return useContext(AppContext);
};
