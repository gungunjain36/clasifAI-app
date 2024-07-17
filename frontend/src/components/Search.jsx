import React, { useEffect, useState } from 'react';
import Options from './Options';
import AiHubLogo from "../assets/AiHubLogo.svg";
import "../index.css";
import axios from 'axios';
import image from '../assets/image.jpg';
import audio from '../assets/audio.jpg';
import video from '../assets/video.jpg';
import business from '../assets/business.jpg';
import code from '../assets/code.jpg';
import text from '../assets/text.jpg';
import threeD from '../assets/threeD.jpg';

const Search = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [aiTools, setAiTools] = useState([]);
  const [initialAiTools, setInitialAiTools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch initial set of AI tools
    axios.get('http://localhost:3000/api/v1/search/?')
      .then((response) => {
        setAiTools(response.data);
        setInitialAiTools(response.data); // store initial tools
        setLoading(false); // data fetching is complete
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // data fetching failed
      });
  }, []);

  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);
  const handlePriceRangeChange = (event) => setSelectedPriceRange(event.target.value);

  const handleSearch = async () => {
    setLoading(true); 
    
    let url = 'http://localhost:3000/api/v1/search/?';
    if (selectedCategory) {
      url += `Major_Category=${encodeURIComponent(selectedCategory)}&`;
    }
    if (selectedPriceRange) {
      url += `Free_Paid_Other=${encodeURIComponent(selectedPriceRange)}`;
    }

    
    await axios.get(url)
      .then((response) => {
        setAiTools(response.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  // Function to get the image based on category
  const getCategoryImage = (category) => {
    switch (category.toLowerCase()) {
      case 'image':
        return image;
      case 'audio':
        return audio;
      case 'video':
        return video;
      case 'business':
        return business;
      case 'code':
        return code;
      case 'text':
        return text;
      case '3d':
        return threeD;
      default:
        return image; // default image if no match found
    }
  };

  return (
    <div className='h-full gradient-animation text-white'>
      <img className="h-14 w-14" src={AiHubLogo} alt="AI Hub Logo" />
      <div className='p-7 flex h-full justify-center gap-7'>
        <div>
          <label className='text-white'>
            <div className="relative inline-block text-left">
              <select className='w-full mt-1 pl-3 font-serif pr-10 custom-select py-2 border-x-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md gradient-animation gradient-text2 cursor-pointer' value={selectedCategory} onChange={handleCategoryChange}>
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
            <select className='w-full mt-1 custom-select font-serif cursor-pointer pl-3 pr-10 py-2 border-x-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md gradient-animation gradient-text2' value={selectedPriceRange} onChange={handlePriceRangeChange}>
              <Options text={"Type"} value={""} />
              <Options text={"Free"} value={"Free"} />
              <Options text={"Freemium"} value={"Freemium"} />
              <Options text={"Paid"} value={"Paid"} />
            </select>
          </label>
        </div>
      </div>
      <div className="bg-gray-50 border-x-2 grid place-content-center b-2 bg-opacity-20 mt-10 h-14 md:min-w-7xl w-auto p-7 backdrop-blur-sm shadow-2xl rounded-3xl text-slate-300 hover:bg-opacity-20 hover:bg-slate-400 hover:text-slate-100 hover:border-2 cursor-pointer ml-10 mr-10" onClick={handleSearch}>
        SEARCH
      </div>
      <div className='flex place-content-center p-10 flex-row flex-wrap'>
        {loading ? (
          <div className="text-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
              <span className="visually-hidden"></span>
            </div>
          </div>
        ) : (
          aiTools.map((aitool) => (
            <a href={aitool.Tool_Link}><div className='flex border-y-sky-200 shadow-md bg-slate-700  hover:bg-slate-700 hover:bg-opacity-55 hover:border-x-2 bg-opacity-35 p-3 m-3 rounded-2xl' key={aitool._id}>
              <div className='w-52 text-wrap leading-relaxed'>
                <h3 className='mb-2 gradient-text2 font-semibold font-mono text-xl'>{aitool.AI_Tool_Name}</h3>
                <p className='text-sm italic'>{aitool.Description}</p>
                <p className='text-sm text-pink-300'>{aitool.Free_Paid_Other}</p>
                <p className='text-sm'><span className='font-semibold'>Use Case :</span> {aitool.Useable_For}</p>
                <p className='text-sky-300 font-medium italic text-sm'><a href={aitool.Tool_Link} target="_blank" rel="noopener noreferrer">Visit Tool</a></p>
              </div>
              
              <div className='flex items-center'>
                <img src={getCategoryImage(aitool.Major_Category)} alt={aitool.Major_Category} className='w-20 h-20 m-2 md:ml-10 object-cover rounded-xl' />
              </div>
            </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
