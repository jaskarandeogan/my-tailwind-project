import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

// import Pagination from './Pagination.js';

function App() {
  const [Data, setData] = useState([]);
  const apiUrl = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData(data) {
    axios.get(apiUrl).then((result) => {
      // console.log(result.data);
      setData(result.data);
    });
  }

  return (
    <div className="max-w-md mx-auto shadow-md overflow-hidden sm:max-w-2xl md:max-w-2xl lg:max-w-7xl">
      <h1 className="text-3xl font-bold text-center m-4">My first design using Tailwind Css</h1>
      
      <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2">
        {Data.map((result, index) => {
          return (
            <>
              {/* write html here for cards */}
              <div key={index} className="transition bg-white scale-90 hover:scale-100 hover:drop-shadow-2xl border-2 border-grey-200 hover:border-red-200 hover:cursor-pointer">
                <div>
                  <img className="h-36 w-full m-auto object-cover" src={result.flags.png} />
                </div>
                <h4 className="text-blue-800 m-4 sm:text-xs md:text-base lg:text-[1.5rem]">{result.name.common}</h4>
                <p className="mx-4 my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi exercitationem aliquid omnis facere consectetur odit
                  quibusdam inventore eos, magni nostrum.
                </p>
                <p className="mx-4 my-2">Population: {result.population}</p>
                <p className="my-4 mx-4">Region: {result.region}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
