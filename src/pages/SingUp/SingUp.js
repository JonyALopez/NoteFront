import React, { useState } from "react";
import "../../assets/css/all.css";
import Title from "./components/Title/TitleSingUp";
import Input from "../../commons/Input/Input";
import { Link, useNavigate } from "react-router-dom";

const SingUp = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleChange(name, value) {
    if (name === "name") {
      setName(value);
    }
    if (name === "lastName") {
      setLastName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let account = { name, lastName, email };
    if (account) {
      console.log(account);
      await fetch("https://apinot3s.herokuapp.com/api/user/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastName,
          email,
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
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <form className="loginBox">
      <Title text=" Registre" />
      <br></br>
      <Input
        atribute={{
          id: "name",
          name: "name",
          type: "text",
          placeholder: "Nombre",
        }}
        handleChange={handleChange}
      />
      <br></br>
      <Input
        atribute={{
          id: "lastName",
          name: "lastName",
          type: "text",
          placeholder: "LastName",
        }}
        handleChange={handleChange}
      />
      <br></br>
      <Input
        atribute={{
          id: "email",
          name: "email",
          type: "text",
          placeholder: "Email",
        }}
        handleChange={handleChange}
      />
      <br></br>
      <button onClick={handleSubmit}>Registre</button>
      <br></br>
      <Link to={"/"}>Login</Link>
    </form>
  );
};

export default SingUp;
