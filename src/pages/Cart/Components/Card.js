import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditNotes from "../../Notes/editNote/EditNotes";



const Card = ({ id,title, description }) => {
    //const { session, setSession } = useContext(SessionContext);
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    console.log(modal)
    const handleDelete = async() => {
        await fetch(`https://apinot3s.herokuapp.com/api/note/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            window.location.reload();
        })
    }

    return (
        <>
            <div className="card text-white bg-dark mb-3 overflow-scroll" style={{ maxWidth: 18 + 'rem' }}>
                <div className="card-header">{title}</div>
                <div className="card-body">
                    <h5 className="card-text text-white">{description}</h5>
                    <button type="button" className="btn btn-light" onClick={()=>setModal(!modal)}>Update</button> {' '}
                    <button type="button" className="btn btn-light" onClick={handleDelete}>Delete</button>
                </div>
                
            </div>
            {modal?<EditNotes id={id} modal={setModal}/>:null}
        </>
    )
}

export default Card;