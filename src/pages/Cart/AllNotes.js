import React, { useState, useEffect } from "react";
import "../../assets/css/all.css";
import Card from "./Components/Card";

import { Link, useNavigate } from "react-router-dom";


const AllNotes = () => {
    const [notes, setNotes] = useState();
    useEffect(() => {
        getAllnotes()
    }, [])

    const getAllnotes = async () => {
        await fetch('https://apinot3s.herokuapp.com/api/note/all')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const { notes } = data;
                setNotes(notes);
            });
    }
    return (
        <>
        {
        notes?.map(note=>(
            <Card key={note._id} title={note.title} description={note.description} />
        ))
        }
        </>
    )
}

export default AllNotes;