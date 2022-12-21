import React from "react";
import Switch from "./Switch";
const Header = () => {
  return (
    <div className="bg-white flex justify-between items-center shadow-sm px-20 py-5">
      <h1 className=" font-mono text-xl font-extrabold">Where in the world ?</h1>
      <div className="">
        <Switch />
      </div>
    </div>
  );
};

export default Header;
