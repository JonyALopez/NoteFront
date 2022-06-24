import React, { useState, useEffect } from "react";
import "../../assets/css/all.css";
import Card from "./Components/Card";


const AllNotes = () => {
    const [notes, setNotes] = useState();
    useEffect(() => {
        const getAllnotes = async () => {
            await fetch('https://apinot3s.herokuapp.com/api/note/all')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    const { notes } = data;
                    setNotes(notes);
                });
        }
        getAllnotes()
    }, [])

    
    return (
        <div className="overflow-scroll">
        {
        notes?.map(note=>(
            <Card key={note._id} title={note.title} description={note.description} id={note._id}/>
        ))
        }
        </div>
    )
}

export default AllNotes;