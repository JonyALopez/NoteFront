import React from "react";

const TextArea =({atribute,handleChange,params}) =>{  //descomposicion 
    return (
        <div >
            <textarea
            id={atribute.id}
            name={atribute.name}
            type={atribute.type}
            placeholder={atribute.placeholder}
            onChange={(e)=>handleChange(e.target.name, e.target.value)} //uso de estados
            className= 'regular-style'
            />
        </div>
    )
};

export default TextArea;