import React, { createContext, useState } from "react";


export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  
  const [darkTheme, setDarkTheme] = useState(false);


  return (
    <ThemeContext.Provider value={{ setDarkTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
