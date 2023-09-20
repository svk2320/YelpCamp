import React, { useState, useEffect } from "react";
import { campsite } from "../constants";
import CampCards from "../components/camp-cards/camp-cards.component";
import { AiOutlineSearch } from "react-icons/ai";

const SearchCampground = () => {
  const [searchField, setSearchField] = useState("");
  const [camps, setCamps] = useState(campsite);
  const [filteredCamps, setFilteredCamps] = useState(campsite);

  // useEffect(() => {
  //   const newFilteredCamps = camps.filter((camp) => {
  //     return camp.title.toLowerCase().includes(searchField.toLowerCase());
  //   });

  //   setFilteredCamps(newFilteredCamps);
  // }, [searchField, camps]);

  const handleInputChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSearchClick = () => {
    // This function will be called when the search button is clicked
    // You can filter the camps based on the search field here
    const newFilteredCamps = camps.filter((camp) => {
      return camp.title.toLowerCase().includes(searchField.toLowerCase());
    });

    setFilteredCamps(newFilteredCamps);
  };

  return (
    <div className="w-5/6 mx-auto">
      <div className="bg-yellow-100 h-[200px] p-5 rounded relative max-sm:h-auto">
        <div className="font-bold text-2xl">Welcome to YelpCamp!</div>
        <div className="my-1">
          View our hand-picked campgrounds from all over the world, or add your
          own.
        </div>

        <div className="md:flex lg:flex my-2">
          <div className="relative">
            <input
              type="text"
              value={searchField}
              onChange={handleInputChange}
              placeholder="Search for camps"
              className="max-sm:w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AiOutlineSearch className="text-gray-400" />
            </div>
          </div>
          <button
            onClick={handleSearchClick}
            className="max-sm:w-full max-sm:mt-2 max-sm:ml-0 ml-2 bg-slate-950 text-white py-2 px-4 rounded-md shadow-md"
          >
            Search
          </button>
        </div>
        <p className="underline underline-offset-4 my-2 hover:cursor-pointer">
          Or add your own campgrounds
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredCamps.map((camp) => (
          <CampCards key={camp.title} {...camp} />
        ))}
      </div>
    </div>
  );
};

export default SearchCampground;
