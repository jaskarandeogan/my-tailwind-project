import React, {useState} from "react";
import useDarkSide from "../hooks/useDarkSide";
import DarkModeToggle from "react-dark-mode-toggle";

export default function Switch() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return(
    <>
    <div className=" flex justify-between items-center gap-2">
        <DarkModeToggle checked={darkSide} 
        onChange={toggleDarkMode}
        size={40}
        />
        <h3 className="text-gray-800 dark:text-gray-300"> {colorTheme === 'light' ? 'Dark mode' : 'Light mode'} </h3>
    </div>
    </>
  )
}
