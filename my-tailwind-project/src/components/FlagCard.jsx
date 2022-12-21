import React from "react";

const FlagCard = ({ result, index }) => {
  return (
    <>
      {/* write html here for cards */}
      <div
        key={index}
        className="max-w-[16.5rem] dark:bg-gradient-to-tl from-[#28313B] to-[#485461] transition group bg-white dark:bg-indigo-200 hover:scale-100 hover:drop-shadow-2xl border-2 border-grey-200 dark:border-3 dark:border-orange-700 hover:border-red-200 hover:cursor-pointer "
      >
        <div>
          <img
            className="h-36 w-full m-auto object-cover opacity-50 group-hover:opacity-100"
            alt="flag"
            src={result.flags.png}
          />
        </div>
        <h4 className="text-blue-800 dark:text-orange-400 m-4 font-bold sm:text-[.75rem]] md:text-[1rem] lg:text-[1.5rem]">
          {result.name.common}
        </h4>
        <p className="mx-4 my-2 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          exercitationem aliquid omnis facere consectetur odit quibusdam
          inventore eos, magni nostrum.
        </p>
        <p className="mx-4 my-2 dark:text-gray-300">
          Population: {result.population}
        </p>
        <p className="my-4 mx-4 dark:text-gray-300">Region: {result.region}</p>
        <div className="flex justify-center ">
          <button
            className="bg-blue-700 mb-4 px-4 py-2 text-white  font-bold
                dark:bg-gradient-to-tl from-[#2b5876] to-[#4e4376] dark:text-gray-300
                "
          >
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default FlagCard;
