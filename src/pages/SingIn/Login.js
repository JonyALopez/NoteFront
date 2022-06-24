import React, { useState, useContext } from "react";
import "../../assets/css/all.css";
import Lable from "./components/Lable/Lable";
import Title from "./components/Title/Title";
import Input from "../../commons/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { SessionContext } from "../../provider/sessionContext";
import { Alert } from "../alert/Alert";

const Login = () => {

  const { session, setSession } = useContext(SessionContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError] =useState("");
  const [showError,setShowError] = useState(false)
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  function handleChange(name, value) {
    if (name === "user") {
      setEmail(value);
    } else {
      if (value.length < 10) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        setPassword(value);
      }
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let account = { email, password };
    if (account) {
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
            setError(data.error)
            setShowError(true)
          } else {
            console.log(data);
            localStorage.setItem("token", data.token); //guardar token en localStorage
            localStorage.setItem("token-init-date", new Date().getTime()); //guarda hora actual
            //window.location.reload(); //recargar la pagina
            setSession({
              _id: validation._id,
              name: validation.name,
              lastName: validation.lastName,
              email: validation.email,
              password: validation.password,
              firstLogin: validation.firstLogin,
              state: validation.state,
              role: validation.role,
              token: data.token
            });
            if (validation.firstLogin === false) {
              navigate("/Notes");
            } else {
              navigate("/NewPassword");

            }
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
    <form className="loginBox">
      <Title text=" Login" />
      <br></br>
      <img
        className="user"
        src="https://i.ibb.co/yVGxFPR/2.png"
        height="100px"
        width="100px"
      ></img>
      <Lable text="User" />
      <br></br>
      <Input
        atribute={{
          id: "user",
          name: "user",
          type: "text",
          placeholder: "Ingrese su usuario o correo",
        }}
        handleChange={handleChange}
      />
      <Lable text="Password" />
      <br></br>
      <Input
        atribute={{
          id: "password",
          name: "password",
          type: "password",
          placeholder: "Ingrese su contraseña",
        }}
        handleChange={handleChange}
        params={passwordError}
      />
      <button onClick={handleSubmit}>Login</button>

      <br></br>
      <Link to={"/SingUp"}>SingUp</Link>
      <Link to={"/ForgotPassword"}>ForgotPassword</Link>
    </form>
     {showError?<Alert message={error}/>:null}
     </>
  );
};

export default Login;
