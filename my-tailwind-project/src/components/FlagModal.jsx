import React from "react";

const FlagModal = ({ index, result }) => {
  console.log(result);
  return (
    <div
      key={index}
      className="flex dark:bg-[#202C36] justify-between items-center md:w-4xl md:h-[70vh] px-6"
    >

      <div className="flex flex-1 justify-center">
        <img src={result.flags.png} alt="flag" className="w-100 h-100" />
      </div>
      <div className="group dark:text-white flex flex-col flex-1 gap-5 ">
        <h1 className=" text-2xl font-bold">{result.name.common}</h1>
        <div className="flex flex-col">
          <p className="text-sm font-semibold">
            Native Name:{" "}
            <span className="font-normal">{result.name.common}</span>
          </p>
          <p className="text-sm font-semibold">
            Population: <span className="font-normal">{result.population}</span>
          </p>
          <p className="text-sm font-semibold">
            Region: <span className="font-normal">{result.region}</span>
          </p>
          <p className="text-sm font-semibold">
            Sub Region: <span className="font-normal">{result.subregion}</span>
          </p>
          <p className="text-sm font-semibold">
            Capital: <span className="font-normal">{result.capital}</span>
          </p>
        </div>
        <div className="flex flex gap-2 items-center ">
          <span className="font-semibold whitespace-nowrap">Border Countries: </span>
          <span className="flex gap-2 items-center">
            {result.borders.map((border, index) => (
              <span key={index} className="text-sm dark:bg-[#2B3844] shadow-md rounded px-4 py-1">
                {border}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlagModal;
