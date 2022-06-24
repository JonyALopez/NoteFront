import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllNotes from "../pages/Cart/AllNotes";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import CreateNotes from "../pages/Notes/createNote/CreateNotes";
import EditNotes from "../pages/Notes/editNote/EditNotes";
import Notes from "../pages/Notes/Notes";
import SetPassword from "../pages/SetPassword/SetPassword";
import Login from "../pages/SingIn/Login";
import SingUp from "../pages/SingUp/SingUp";
import { DashboardRoute } from "./DashboardRoute";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    //recuperar token
    const auth = localStorage.getItem('token')

    useEffect(() => {
        //metodo para validar token
        validateToken()
    }, [])

    const validateToken = async() => {
        const token = localStorage.getItem('token');
        if (token) {
            await fetch('https://apinot3s.herokuapp.com/api/user/validationToken',{
            headers:{
                'x-token':token
            }
        }).then(res => res.json())
        .then(data =>{
            const {message} =data
            console.log(message)
        })
        } else {
            console.log('no llego al token')
            
        }
        
    }


    return (
        <Router>
            <Routes>

                <Route path="/*" element={<PublicRoute checking={auth} />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/SingUp" element={<SingUp />} />
                </Route>

                <Route path="/*" element={<PrivateRoute />} checking={auth}>
                    <Route path="*" element={<DashboardRoute />} />
                </Route>

            </Routes>
        </Router>
    )
}