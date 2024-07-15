import React from "react";

function Options(props){
    return(
        <option className="bg-black text-white" value={props.value}>{props.text}</option>
    )
}

export default Options;