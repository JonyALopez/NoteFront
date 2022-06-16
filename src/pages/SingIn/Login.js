import React, { useState } from "react";
import '../../assets/css/all.css'
import Lable from "./components/Lable/Lable";
import Title from './components/Title/Title';
import Input from '../../commons/Input/Input';
import {Link} from 'react-router-dom';



const Login = () => {

    const [user,setUser]= useState('');
    const [password,setPassword]= useState('');
    const [passwordError, setPasswordError]= useState(false);

    function handleChange (name,value){
        if(name === 'user'){
            setUser(value);
        }else{
            if(value.length < 10){
                setPasswordError (true)
            }else{
                setPasswordError(false);
                setPassword(value);
            }
            
        }
    };


    function handleSubmit(e){
        e.preventDefault();
        let account ={user, password}
        if(account){
           console.log(account);
        }
    };

    return (
        <form  className="loginBox" > 
             <Title text= " Login"/>
             <br></br>
             <img className="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px"></img>
             <Lable text = "User"/>
             <br></br>
             <Input
             atribute={{
                 id:'user',
                 name:'user',
                 type:'text',
                 placeholder:'Ingrese su usuario o correo'

             }}
             handleChange= {handleChange}

             />
             <Lable text = "Password"/>
             <br></br>
             <Input
             atribute={{
                 id:'password',
                 name:'password',
                 type:'password',
                 placeholder:'Ingrese su contraseña'
             }}
             handleChange= {handleChange}
             params={passwordError}
             />
             <button onClick= {handleSubmit}>
                 Login
             </button>

             <br></br>
             <Link to={'/SingUp'}>SingUp</Link>
        </form>
       
    )
};

export default Login;