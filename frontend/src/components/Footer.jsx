import React from "react";
import CustomButton from "./CustomButton";
import twitter from "../assets/x-twitter.svg";
import linkedin from "../assets/linkedin.svg";
function Footer(){
    function githubLink(){
        window.location.href="https://github.com/gungunjain36/ai-hub-app";
    }
    function reportBug(){
        window.location.href="https://github.com/gungunjain36/ai-hub-app/issues";
    }
    function gmailLink(){
        window.location.href="mailto:gungunjainxia@gmail.com";
    }
    return(
        <div className="h-full">
            <div className="flex grid-flow-col mb-20 ml-10 mr-10 justify-center flex-row gap-3"> 
                    <CustomButton onClick={gmailLink} text={"Contact Me"} />
                    <CustomButton onClick={reportBug} text={"Report a Bug"} />
                    <CustomButton onClick={githubLink} text={"Github Repo"} />
            </div>
            <div className="flex justify-center flex-row gap-5 bg-black"> 
            </div>
            <div className="flex justify-center gap-3 mb-4">
                <div className="text-white">
                    <a href="https://x.com/jGungun36?t=0GyTEetVjo_B2Owy-ZevSA&s=09"><img className="h-5 w-5" src={twitter} /></a>
                </div>
                <div>
                <a href="https://www.linkedin.com/in/gungun-jain-3bb256267"><img className="h-5 w-5" src={linkedin} /></a>
                </div>
            </div>
            <div className="text-white flex justify-center">
                Made by <span className="text-xl pl-3 mb-10 gradient-text2">Gungun Jain</span>
            </div>
        </div>
    )
}

export default Footer;