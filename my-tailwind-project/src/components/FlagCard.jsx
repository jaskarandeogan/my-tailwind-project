import React, { useState } from "react";
import { formatNumbers } from "../vanilla/formatNumbers";
import Modals from "./shared/Modals";
import FlagModal from "./FlagModal";
const FlagCard = ({ result, index }) => {
  const [open, setOpen] = useState(false);

  function handleModal() {
    setOpen(true);
  }

  return (
    <>
      {/* write html here for cards */}
      <div
        key={index}
        className="w-[16.5rem] dark:bg-[#2B3844]  group bg-white  hover:scale-100 hover:drop-shadow-2xl rounded-sm  hover:cursor-pointer transition duration-300 ease-in-out"
      >
        <div>
          <img
            className="h-40 w-full m-auto object-cover opacity-50 group-hover:opacity-100"
            alt="flag"
            src={result.flags.png}
          />
        </div>
        <h4 className="text-blue-800 dark:text-white m-4 font-bold sm:text-[.75rem]] md:text-[1rem] lg:text-[1.5rem]">
          {result.name.common}
        </h4>
        <p className="mx-4 my-2 dark:text-gray-300">
          <span className="font-medium">Capital City: </span> {result.capital}
        </p>
        <p className="mx-4 my-2 dark:text-gray-300">
          <span className="font-medium">Population: </span>
          {formatNumbers(result.population)}
        </p>
        <p className="mx-4 my-2 dark:text-gray-300">
          <span className="font-medium">Region: </span>
          {result.region}
        </p>
        <div className="flex justify-center ">
          <button
            className="bg-blue-700 m-5 px-4 py-2 text-white  font-bold
                dark:bg-gradient-to-tl from-[#2b5876] to-[#4e4376] dark:text-gray-300
                hover:bg-blue-400 transition duration-300 ease-in-out rounded-sm hover:brightness-125"
            onClick={() => handleModal()}
          >
            View More
          </button>
          <Modals open={open} setOpen={setOpen} >
            <FlagModal result={result} />
          </Modals>
        </div>
      </div>
    </>
  );
};

export default FlagCard;
