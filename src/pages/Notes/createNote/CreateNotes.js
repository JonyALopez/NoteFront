import React, { useState } from "react";
import "../../../assets/css/all.css";
import Input from "../../../commons/Input/Input";
import "../../../commons/TextArea/TextArea.css";
import TextArea from "../../../commons/TextArea/TextArea";
import Title from "../../../commons/Title/Title/TitleCreate";
import Nav from "../components/Nav/Nav";
import "../../../assets/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const CreateNotes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function handleChange(name, value) {
    if (name === "title") {
      setTitle(value);
    }
    if (name === "description") {
      setDescription(value);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let account = { title, description };
    if (account) {
      console.log(account);
      await fetch("https://apinot3s.herokuapp.com/api/note/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const { newNote } = data; //respuesta del back
          if (data.succes === false) {
            console.log(data);
          } else {
            localStorage.setItem("token", data.token); //guardar token en localStorage
            localStorage.setItem("token-init-date", new Date().getTime()); //guarda hora actual
            //window.location.reload(); //recargar la pagina
            navigate("/Notes")
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Nav />
      </nav>

      <form className="loginBox">
        <Title text=" Create Note" />
        <br></br>
        <Input
          atribute={{
            id: "title",
            name: "title",
            type: "text",
            placeholder: "Titulo",
          }}
          handleChange={handleChange}
        />
        <br></br>
        <TextArea
          atribute={{
            id: "description",
            name: "description",
            type: "text",
            placeholder: "Descripcion",
          }}
          handleChange={handleChange}
        />
        <button onClick={handleSubmit}>Create</button>

        <br></br>
      </form>
    </div>
  );
};

export default CreateNotes;
