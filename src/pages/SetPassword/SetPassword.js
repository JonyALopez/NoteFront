import React, { useState } from "react";
import "../../assets/css/all.css";
import Input from "../../commons/Input/Input";
import Title from "../../commons/Title/Title/TitleCreate";
import "../../assets/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const SetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  function handleChange(name, value) {
    if (name === "newPassword") {
      setNewPassword(value);
    }
  }

  async function handleSubmit(e) {
    e.prevenDefault();
    let account = { newPassword };
    if (account) {
      console.log(account);
      await fetch("https://apinot3s.herokuapp.com/api/user/changeOfPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newPassword
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
            navigate("/Notes");
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>
      <form className="loginBox">
        <Title text=" New Password" />
        <br></br>
        <Input
          atribute={{
            id: "newPassword",
            name: "newPassword",
            type: "text",
            placeholder: "New Password",
          }}
          handleChange={handleChange}
        />
        <br></br>
        <button onClick={handleSubmit}>Update</button>

        <br></br>
      </form>
    </div>
  );
};

export default SetPassword;
