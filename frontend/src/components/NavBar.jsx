import React from "react";
// import AiHubLogo from "C:\Users\Gungun Jain\projects\ai-hub-app\frontend\src\components\AiHubLogo.png";
import AiHubLogo from '../assets/AiHubLogo.svg';
function NavBar() {
    return (
      <div className="relative max-w-screen-2xl h-15 text-blue-300 backdrop-filter-none">
        <nav className="relative flex flex-row items-center z-10">
          <div>
            <img className="h-14 w-14" src="/src/assets/AiHubLogo.svg" alt="AI Hub Logo" />
          </div>
          <div className="m-2 text-2xl text-blue-300 font-semibold font-mono">
            AiHub
          </div>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* Other elements */}
          </div>
        </nav>
      </div>
    );
  }
  
  export default NavBar;
  