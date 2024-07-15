import React, { useState } from 'react';
import Options from './Options';
import AiHubLogo from "../assets/AiHubLogo.svg";
import "../index.css";

const Search = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');


  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);
  const handlePriceRangeChange = (event) => setSelectedPriceRange(event.target.value);

  return (
    <div className='h-screen gradient-animation text-white'>
      <img className="h-14 w-14" src={AiHubLogo} alt="AI Hub Logo" />
      <div className='p-7 flex justify-center gap-7'>
      {/* <h1 className='text-base font-mono md:text-xl lg:text-3xl font-semibold gradient-text'>Choose your Tool:</h1> */}
        <div>
          <label className='text-white'>
            {/* <span className='mr-2 font-serif font-semibold'>Category:</span> */}
            <div className="relative inline-block text-left">
            <select className='w-full mt-1 pl-3 font-serif pr-10 custom-select py-2 border-x-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md gradient-animation gradient-text2' value={selectedCategory} onChange={handleCategoryChange}> 
              <Options text={"All Categories"} value={"other"} />
              <Options text={"Text"} value={"text"} />
              <Options text={"Audio"} value={"audio"} />
              <Options text={"Image"} value={"image"} />
              <Options text={"Code"} value={"code"} />
              <Options text={"3D"} value={"3D"} />
              <Options text={"Business"} value={"business"} />
              <Options text={"Video"} value={"video"} />
            </select>
            </div>
          </label>
        </div>
        <div>
          <label className='text-white'>
          {/* <span className="mr-2 font-serif font-semibold ">Type: </span> */}
            <select className='w-full mt-1 custom-select ont-seriff pl-3 pr-10 py-2 border-x-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md gradient-animation gradient-text2' value={selectedPriceRange} onChange={handlePriceRangeChange}>
           <Options text={"Free"} value={"Free"} />
           <Options text={"Freemium"} value={"Freemium"} />
           <Options text={"Paid"} value={"Paid"} />
              
            </select>
          </label>
        </div>
      </div>
      <div className="bg-gray-50 border-x-2 grid place-content-center b-2 bg-opacity-20 mt-10 h-14 md:min-w-7xl w-auto p-7 backdrop-blur-sm shadow-2xl rounded-3xl text-slate-300 hover:bg-opacity-20 hover:bg-slate-400 hover:text-slate-100 hover:border-2 cursor-pointer ml-10 mr-10">
        SEARCH
      </div>
    </div>

    
  );
};

export default Search;
