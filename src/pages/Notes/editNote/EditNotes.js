import React, { useState, useContext } from "react";
import '../../../assets/css/all.css'
import Input from '../../../commons/Input/Input';
import '../../../commons/TextArea/TextArea.css';
import TextArea from '../../../commons/TextArea/TextArea'
import Title from '../../../commons/Title/Title/TitleCreate';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from "../../alert/Alert";


const EditNotes = ({ id, modal }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const[error,setError] =useState("");
    const [showError,setShowError] = useState(false)
    const navigate = useNavigate();
    function handleChange(name, value) {
        if (name === 'title') {
            setTitle(value);
        }
        if (name === 'description') {
            setDescription(value);
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();
        let account = { title, description }
        if (account) {
            await fetch(`https://apinot3s.herokuapp.com/api/note/update/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, description }),
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title, description
                })
            })
                .then(res => res.json())
                .then((data) => {
                    console.log(data)
                    const { notesUpdate } = data;
                    if (data === false) {
                        console.log(data)
                        setError(data.error)
                        setShowError(true)

                    } else {
                        window.location.reload()
                        navigate('/Notes');
                    }


                })
        }


    };

    return (

        <>
        <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Actualizar</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="container-fluid">
                        <div className="row">
                            <form>
                                <div className="mb-1">
                                    <label className="col-form-label">Title:</label>
                                    <Input
                                        atribute={{
                                            id: 'title',
                                            name: 'title',
                                            type: 'text',
                                            placeholder: 'Titulo'

                                        }}
                                        handleChange={handleChange}

                                    />
                                </div>
                                <div className="mb-1">
                                    <label  className="col-form-label">Description:</label>
                                    <TextArea
                                        atribute={{
                                            id: 'description',
                                            name: 'description',
                                            type: 'text',
                                            placeholder: 'Descripcion'
                                        }}
                                        handleChange={handleChange}
                                    />

                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => modal(false)}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Update</button>
                </div>
            </div>
        </div>
     {showError?<Alert message={error}/>:null}
     </>
                                                


    )
};

export default EditNotes;