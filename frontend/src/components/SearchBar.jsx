import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";



function SearchBar(){
    const navigate = useNavigate();
    function handleClick(){
        navigate('/search');
    }
    
    return(
        <div onClick={handleClick} className="bg-gray-50 border-x-2 grid place-content-center b-2 bg-opacity-20 mt-10 h-14 md:min-w-7xl w-96 p-7 backdrop-blur-sm shadow-2xl rounded-3xl text-slate-300 hover:bg-opacity-20 hover:bg-slate-400 hover:text-slate-100 hover:border-2 cursor-pointer ml-10 mr-10">
            <div>
                Search for your Ai...
            </div>
        </div>
    )
        
}

export default SearchBar;
