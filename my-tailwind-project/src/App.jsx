import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Switch from "./Switch";

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
    <div className=" max-w-md mx-auto shadow-md overflow-hidden sm:max-w-2xl md:max-w-2xl lg:max-w-7xl p-4">
      <div className=" position: absolute right-0 m-4">
        <Switch />
      </div>
      <h1 className="text-3xl dark:text-yellow-500 font-bold text-center m-4">
        My first design using Tailwind Css
      </h1>

      <div className="  grid lg:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2 mt-[3rem]">
        {Data.map((result, index) => {
          return (
            <>
              {/* write html here for cards */}
              <div
                key={index}
                className="dark:bg-gradient-to-tl from-[#28313B] to-[#485461] transition group bg-white dark:bg-indigo-200 scale-90 hover:scale-100 hover:drop-shadow-2xl border-2 border-grey-200 dark:border-3 dark:border-orange-700 hover:border-red-200 hover:cursor-pointer"
              >
                <div>
                  <img
                    className="h-36 w-full m-auto object-cover opacity-50 group-hover:opacity-100"
                    src={result.flags.png}
                  />
                </div>
                <h4 className="text-blue-800 dark:text-orange-400 m-4 font-bold sm:text-[.75rem]] md:text-[1rem] lg:text-[1.5rem]">
                  {result.name.common}
                </h4>
                <p className="mx-4 my-2 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi exercitationem aliquid omnis facere consectetur odit
                  quibusdam inventore eos, magni nostrum.
                </p>
                <p className="mx-4 my-2 dark:text-gray-300">Population: {result.population}</p>
                <p className="my-4 mx-4 dark:text-gray-300">Region: {result.region}</p>
                <div className="flex justify-center ">
                  {" "}
                  <button className="bg-blue-700 mb-4 px-4 py-2 text-white  font-bold
                  dark:bg-gradient-to-tl from-[#2b5876] to-[#4e4376] dark:text-gray-300
                  ">
                    View More
                  </button>
                  
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;

         
// .btn-grad {
//   background-image: linear-gradient(to right, #2b5876 0%, #4e4376  51%, #2b5876  100%);
//   margin: 10px;
//   padding: 15px 45px;
//   text-align: center;
//   text-transform: uppercase;
//   transition: 0.5s;
//   background-size: 200% auto;
//   color: white;            
//   box-shadow: 0 0 20px #eee;
//   border-radius: 10px;
//   display: block;
// }

// .btn-grad:hover {
//   background-position: right center; /* change the direction of the change here */
//   color: #fff;
//   text-decoration: none;
// }

