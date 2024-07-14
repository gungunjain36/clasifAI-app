import React from "react";
// import AiHubLogo from "C:\Users\Gungun Jain\projects\ai-hub-app\frontend\src\components\AiHubLogo.png";
import AiHubLogo from '../assets/AiHubLogo.svg';
import userProfile from "../assets/user-solid.svg";
function NavBar() {
    return (
      <div className="relative max-w-screen-2xl h-15 text-blue-300 backdrop-filter-none">
        <nav className="relative flex flex-row items-center z-10">
          <div><a href="#">
            <img className="h-14 w-14" src={AiHubLogo} alt="AI Hub Logo" /></a>
          </div>
          <div className="m-2 text-2xl text-orange-200 font-semibold font-mono gradient-text">
            <a href="#">AiHub</a>
          </div>
          <div className="grid place-content-center ml-auto mr-8 h-10 w-10 rounded-full border-4 border-black bg-blue-300 m-3 shadow-md">
            <img className="h-8 w-8" src={userProfile} />
          </div>
        </nav>
      </div>
    );
  }
  
  export default NavBar;
  