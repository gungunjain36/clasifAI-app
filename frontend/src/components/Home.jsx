import React from "react";
import NavBar from './NavBar';
import SearchBar from "./SearchBar"
import Footer from "./Footer";
import '../index.css';
function Home(){
    return (
         <div className="gradient-animation h-full min-h-full bg-slate-900 mb-0 backdrop-blur-sm">
            <NavBar />
            <div className="flex items-center justify-center flex-col">
                <div className="gradient-text2 flex items-center justify-center mt-28 mb-5 text-2xl lg:text-7xl sm:text-3xl font-mono md:text-5xl">
                    <h2>Welcome To The ClassifAI!!</h2>
                </div>
                <div className="text-yellow-50 md:text-xl font-serif italic">
                    <h2>A Place Where You Can Find Your <span className="gradient-text font-bold text-xl">Ai</span></h2>
                </div> 
            </div>
            <div className="flex justify-center h-40 mt-28 ">
                <SearchBar />
            </div>
            <div>
                <Footer />
            </div>
        </div>
        
    )
}

export default Home;