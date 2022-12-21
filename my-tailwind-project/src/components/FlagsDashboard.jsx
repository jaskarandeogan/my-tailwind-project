import { useEffect, useState } from "react";
import axios from "axios";
import FlagCard from "./FlagCard";
import SearchBar from "./shared/SearchBar";
import Dropdowns from "./shared/Dropdowns";

const FlagsDashboard = () => {
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
    <div className=" px-20  ">
      <div className="flex justify-between items-center py-12">
        <SearchBar placeholder="Search for a country..." />
        <Dropdowns />
      </div>
      <div className=" flex flex-wrap justify-between  gap-y-8 ">
        {Data.map((item, index) => {
          return <FlagCard result={item}  key={index} />;
        })}
      </div>
    </div>
  );
};

export default FlagsDashboard;
