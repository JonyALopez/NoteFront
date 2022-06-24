import React from "react";

const Input =({atribute,handleChange,params}) =>{  //descomposicion 
    return (
        <div >
            <input
            id={atribute.id}
            name={atribute.name}
            type={atribute.type}
            placeholder={atribute.placeholder}
            onChange={(e)=>handleChange(e.target.name, e.target.value)} //uso de estados
            className= 'regular-style form-control'
            />
        </div>
    )
};

export default Input;