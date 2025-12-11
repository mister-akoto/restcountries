import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import toggleTheme from "../utils/toggleTheme";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const headerRef = useRef()
  useEffect(()=>{
    toggleTheme(headerRef.current,darkTheme)
  },[darkTheme])

  return (
    <div ref={headerRef} className="header light-containers">
      <h1> Where in the world?</h1>
      <div className="toggle-theme" onClick={() => setDarkTheme(!darkTheme)}>
        <img src="src\assets\icons8-moon-symbol-48.png" alt="dark toggle" />
        <p className="theme"> Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
