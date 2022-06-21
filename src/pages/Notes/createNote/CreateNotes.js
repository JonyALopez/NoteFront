import React, { useState } from "react";
import "../../../assets/css/all.css";
import Input from "../../../commons/Input/Input";
import "../../../commons/TextArea/TextArea.css";
import TextArea from "../../../commons/TextArea/TextArea";
import Title from "../../../commons/Title/Title/TitleCreate";
import Nav from '../components/Nav/Nav'
import '../../../assets/css/bootstrap.min.css'
import { Link } from "react-router-dom";

const CreateNotes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleChange(name, value) {
    if (name === "title") {
      setTitle(value);
    }
    if (name === "description") {
      setDescription(value);
    }
  }

  async function handleSubmit() {
    let account = { title, description };
    if (account) {
      console.log(account);
    }
  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Nav/>
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
