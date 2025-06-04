import { createContext, useState } from "react";

export const UtillsContext = createContext();

export const UtillsProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <UtillsContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </UtillsContext.Provider>
  );
};
