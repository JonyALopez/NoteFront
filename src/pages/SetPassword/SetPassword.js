import React, { useState, useContext } from "react";
import "../../assets/css/all.css";
import Input from "../../commons/Input/Input";
import Title from "../../commons/Title/Title/TitleCreate";
import "../../assets/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../../provider/sessionContext";
import { Alert } from "../alert/Alert";

const SetPassword = () => {

  const { session, setSession } = useContext(SessionContext);
  const [newPassword, setNewPassword] = useState("");
  const[error,setError] =useState("");
  const [showError,setShowError] = useState(false)
  const navigate = useNavigate();

  function handleChange(name, value) {
    if (name === "newPassword") {
      setNewPassword(value);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let account = { newPassword };
    if (account) {
      //console.log(account);
      await fetch(
        `https://apinot3s.herokuapp.com/api/user/firsLogin/${session.email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newPassword,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const { newPassword } = data; //respuesta del back
          if (data.success === false) {
            setError(data.error.errors[0].msg)
            setShowError(true)
          } else {
            navigate("/Notes");
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
    <div>
      <form className="loginBox">
        <Title text=" New Password" />
        <br></br>
        <Input
          atribute={{
            id: "newPassword",
            name: "newPassword",
            type: "password",
            placeholder: "New Password",
          }}
          handleChange={handleChange}
        />
        <br></br>
        <button onClick={handleSubmit}>Update</button>

        <br></br>
      </form>
    </div>
    {showError?<Alert message={error}/>:null}
    </>
  );
};

export default SetPassword;
