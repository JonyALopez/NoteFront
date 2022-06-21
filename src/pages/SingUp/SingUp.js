import React, { useState } from "react";
import '../../assets/css/all.css'
import Title from './components/Title/TitleSingUp';
import Input from '../../commons/Input/Input';
import {Link} from 'react-router-dom';


const SingUp = () => {

    const [name,setName]= useState('');
    const [lastName,setLastName]= useState('');
    const [email,setEmail]= useState('');

    function handleChange (name,value){
        if(name === 'name'){
            setName(value);
        }
        if(name==='lastName'){
            setLastName(value);
        }
        if(name==='email'){
            setEmail(value);

        }
            
    };

    async function handleSubmit(e){
        e.preventDefault();
        let account ={name,lastName,email}
        if(account){
            console.log(account);
           /*await fetch ("https://apinot3s.herokuapp.com/api/user/signUp", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                lastName,
                email,
            })
           })
           .then((response)=>response.json())
           .then((data)=>{
            if(data.succes==false){

            }else{
                <Link to={'/'} />
            }
           });*/
           <Link to={'/'}></Link>
        }
    };

    return (
        <form  className="loginBox" > 
             <Title text= " Registre"/>
             <br></br>
             <Input
             atribute={{
                 id:'name',
                 name:'name',
                 type:'text',
                 placeholder:'Nombre'

             }}
             handleChange= {handleChange}

             />
             <br></br>
             <Input
             atribute={{
                 id:'lastName',
                 name:'lastName',
                 type:'text',
                 placeholder:'LastName'
             }}
             handleChange= {handleChange}
             />
            <br></br>
             <Input
             atribute={{
                 id:'email',
                 name:'email',
                 type:'text',
                 placeholder:'Email'
             }}
             handleChange= {handleChange}
             />
            <br></br>
             <button onClick= {handleSubmit}>
                 Registre
             </button>
             <br></br>
             <Link to={'/'}>Login</Link>
        </form>
       
    )
};

export default SingUp;