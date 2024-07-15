import React from "react";

function CustomButton(props){
    return(
        <div className="grid p-5 place-content-center bg-opacity-20 bg-slate-900 h-14 w-auto shadow-2xl mt-28 rounded-2xl border-x-2 border-white text-white hover:bg-opacity-30 backdrop-blur-md hover:bg-slate-400 hover:text-gray-300 hover:border-2 cursor-pointer" 
        onClick={props.onClick}>
            {props.text}
        </div>
    )
}

export default CustomButton;