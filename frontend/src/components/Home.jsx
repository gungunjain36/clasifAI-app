import React from "react";
import NavBar from './NavBar';
import Search from "./Search"
import bgImage from "../assets/pexels-suzyhazelwood-1629236.jpg"
import '../index.css';
function Home(){
    return (
        <>
         <div className="gradient-animation min-h-screen bg-slate-900 backdrop-blur-sm">
            <NavBar />
            <div className="flex items-center justify-center flex-col">
                <div className="gradient-text2 flex items-center justify-center mt-28 mb-5 text-3xl font-mono md:text-5xl">
                    <h2>Welcome To The AiHub!!</h2>
                </div>
                <div className="text-yellow-50 md:text-xl italic">
                    <h2>A Place Where You Can Find Your <span className="gradient-text font-bold text-xl">Ai</span></h2>
                </div> 
            </div>
            <Search />
        </div>
        </>
    )
}

export default Home;