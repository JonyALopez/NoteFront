import React from "react";
import '../../../../assets/css/all.css'
const Label =({text})=>{
    return(
        <div className= "label-container">
           <label className= "label-label">
               {text}
           </label>
        </div>
    )

};

export default Label;