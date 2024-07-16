import React from "react";

function Options(props){
    return(
        <option className="bg-black text-white text-sm md:text-base" value={props.value}>{props.text}</option>
    )
}

export default Options;