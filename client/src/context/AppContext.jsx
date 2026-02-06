import { createContext, useContext, useState } from "react";

/* 1. Create Context */
const AppContext = createContext();

/* 2. Provider Component */
export const AppProvider = ({ children }) => {
  // Global states
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  // Values you want globally available
  const value = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    loading,
    setLoading,
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
