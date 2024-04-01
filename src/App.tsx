import React from 'react';
import './App.css';
import SportCard from './SportCard';
import Button from './Button';
import Collection from './Collection';
import { IoMoon, IoSunny } from "react-icons/io5";
import Eclipse from './Eclipse';


function App() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={`App ${dark ? 'dark-mode' : ''}`}>
      <div className="toggle-button" onClick={darkModeHandler}>
        {dark ? <IoSunny /> : <IoMoon />}
      </div>
      <SportCard />
      <Button />
      <Collection dark={dark} />
    </div>
  );
}

export default App;
