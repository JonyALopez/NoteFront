import React, { useState, useContext } from "react";
import "../../assets/css/all.css";
import Input from "../../commons/Input/Input";
import Title from "../../commons/Title/Title/TitleCreate";
import "../../assets/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../../provider/sessionContext";

const SetPassword = () => {

  const { session, setSession } = useContext(SessionContext);
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  console.log(session);

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
          if (data.succes === false) {
            console.log(data);
          } else {
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
  );
};

export default SetPassword;
