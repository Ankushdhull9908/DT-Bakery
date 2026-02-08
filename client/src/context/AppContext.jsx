import { createContext, useContext, useEffect, useRef, useState } from "react";

/* 1. Create Context */
const AppContext = createContext();

/* 2. Provider Component */
export const AppProvider = ({ children }) => {

  
  // Global states
   const [width, setWidth] = useState(window.innerWidth);
   const [showmenu,setshowmenu] = useState(false)
   const [showcartsidebar,setshowcartsidebar] = useState(false)
   
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

   


  // Values you want globally available
  const value = {
    width,
    showmenu,setshowmenu,showcartsidebar,setshowcartsidebar
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
