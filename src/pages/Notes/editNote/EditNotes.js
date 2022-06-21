import React, { useState } from "react";
import '../../../assets/css/all.css'
import Input from '../../../commons/Input/Input';
import '../../../commons/TextArea/TextArea.css';
import TextArea from '../../../commons/TextArea/TextArea'
import Title from '../../../commons/Title/Title/TitleCreate';
import {Link} from 'react-router-dom';

const EditNotes = () => {

    const [title,setTitle]= useState('');
    const [description,setDescription] = useState('');

    function handleChange (name,value){
        if(name === 'title'){
            setTitle(value);
        }
        if(name ==='description'){
            setDescription(value);
        }   
    };

    async function handleSubmit(){
        let account ={title,description}
        if(account){
            console.log(account);
        }
    };

    return(
        <form  className="loginBox" > 
        <Title text= " Edit Note"/>
        <br></br>
        <Input
        atribute={{
            id:'title',
            name:'title',
            type:'text',
            placeholder:'Titulo'

        }}
        handleChange= {handleChange}

        />
        <br></br>
        <TextArea
        atribute={{
            id:'description',
            name:'description',
            type:'text',
            placeholder:'Descripcion'
        }}
        handleChange= {handleChange}
        />
        <button onClick= {handleSubmit}>
            Edit
        </button>

        <br></br>
   </form>

    )
};

export default EditNotes;