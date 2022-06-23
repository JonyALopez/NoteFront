import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Card = ({ title, description }) => {

    const handleDelete = async() => {
        await fetch()
        .then(res => res.json())
        .then(data => {
            //respeutes aPI
        })
    }

    const handleUpdate = async() => {
        await fetch()
        .then(res => res.json())
        .then(data => {
            //respeutes aPI
        })
    }


    return (
        <>
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: 18 + 'rem' }}>
                <div className="card-header">{title}</div>
                <div className="card-body">
                    <h5 className="card-text text-white">{description}</h5>
                    <button type="button" className="btn btn-light" onClick={handleUpdate}>Editar</button> {' '}
                    <button type="button" className="btn btn-light" onClick={handleDelete}>Delete</button>
                </div>

            </div>
        </>
    )
}

export default Card;