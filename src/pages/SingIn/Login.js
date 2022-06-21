import React, { useState } from "react";
import '../../assets/css/all.css'
import Lable from "./components/Lable/Lable";
import Title from './components/Title/Title';
import Input from '../../commons/Input/Input';
import {Link, useNavigate} from 'react-router-dom';



const Login = () => {

    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [passwordError, setPasswordError]= useState(false);
    const navigate = useNavigate();

    function handleChange (name,value){
        if(name === 'user'){
            setEmail(value);
        }else{
            if(value.length < 10){
                setPasswordError (true)
            }else{
                setPasswordError(false);
                setPassword(value);
            }
            
        }
    };


   async function handleSubmit(e){
        e.preventDefault();
        let account ={email, password}
        if(account){
            console.log(account);
            await fetch("https://apinot3s.herokuapp.com/api/user/signIn", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email,
                  password,
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  const { validation } = data; //respuesta del back
                  if (data.succes === false) {
                    console.log(data);
                  } else {
                    console.log(data);
                    localStorage.setItem("token", data.token); //guardar token en localStorage
                    localStorage.setItem("token-init-date", new Date().getTime()); //guarda hora actual
                    //window.location.reload(); //recargar la pagina
                    navigate("/NewPassword");
                  }
                })
                .catch((err) => console.log(err));
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