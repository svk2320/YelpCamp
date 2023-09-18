import { useState } from 'react';
import Button from '../components/button/button.component';
import SearchIcon from '../assets/Search Icon.svg'; // Replace with the correct path to your SearchIcon.svg

const SearchCampground = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const filterCamps = () => {};

  return (
    <div className='container mx-auto'>
      <div className='bg-yellow-100 p-5 rounded relative'>
        <div className='font-semibold text-2xl'>Welcome to YelpCamp!</div>
        <div>View our hand-picked campgrounds from all over the world, or add your own.</div>
        <div className='relative'>
          <input
            type="search"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search for camps"
            className="rounded"
          />
          <SearchIcon />
        </div>
        <Button text="Search" />
        <p className='underline underline-offset-4'>Or add your own campgrounds</p>
      </div>
      <div className='flex'>
        <div>Camp</div>
        <div>Camp</div>
        <div>Camp</div>
        <div>Camp</div>
        <div>Camp</div>
        <div>Camp</div>
      </div>
    </div>
  );
};

export default SearchCampground;
