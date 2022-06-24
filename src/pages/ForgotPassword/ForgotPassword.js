import React, { useState, useContext } from "react";
import "../../assets/css/all.css";
import Input from "../../commons/Input/Input";
import Title from "../../commons/Title/Title/TitleCreate";
import "../../assets/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../../provider/sessionContext";
import { Alert } from "../alert/Alert";

const ForgotPassword = () => {

  
  const [email, setEmail] = useState("");
  const[error,setError] =useState("");
  const [showError,setShowError] = useState(false)
  const navigate = useNavigate();

  function handleChange(name, value) {
    if (name === "email") {
      setEmail(value);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let account = { email };
    if (account) {
        console.log(account);
      await fetch("https://apinot3s.herokuapp.com/api/user/forgotpassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const { message } = data; //respuesta del back
          console.log(message);
          if (data.succes === false) {
            console.log(data);
            setError(data.error)
            setShowError(true)
          } else {
            console.log(message);
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
    <div>
      <form className="loginBox">
        <Title text=" Forgot Password" />
        <br></br>
        <Input
          atribute={{
            id: "email",
            name: "email",
            type: "text",
            placeholder: "email",
          }}
          handleChange={handleChange}
        />
        <br></br>
        <button onClick={handleSubmit}>Forgot</button>

        <br></br>
      </form>
    </div>
    {showError?<Alert message={error}/>:null}
    </>
  );
};

export default ForgotPassword;