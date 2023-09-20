import { useState } from "react";
import Button from "../components/button/button.component";

import { camps } from "../constants";
import CampCards from "../components/camp-cards/camp-cards.component";

import React from "react";
import { AiOutlineSearch } from "react-icons/ai"; // Replace 'AiOutlineSearch' with your preferred search icon from 'react-icons'

const SearchCampground = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const filterCamps = () => {};

  return (
    <div className="container mx-auto">
      <div className="bg-yellow-100 p-5 rounded relative">
        <div className="font-semibold text-2xl">Welcome to YelpCamp!</div>
        <div>
          View our hand-picked campgrounds from all over the world, or add your
          own.
        </div>
        <div className="flex">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search for camps"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AiOutlineSearch className="text-gray-400" />
            </div>
          </div>
          <button className="ml-2 bg-slate-950 hover:bg-slate-800 text-white py-2 px-4 rounded-md shadow-md">
            Search
          </button>
        </div>
        <p className="underline underline-offset-4">
          Or add your own campgrounds
        </p>
      </div>
      <div className="flex">
        {
          camps.map(camp => (
            <CampCards key={camp.title} {...camp} />
          ))
        }
      </div>
    </div>
  );
};

export default SearchCampground;
