import React from "react";
import {Outlet } from "react-router-dom";

export default function Home(){
    return(
        <>
        <div>
            <h3>Autenticarse</h3>
            <h3>Registrarse</h3>
        </div>
        <div>
            About:
            <Outlet/>
        </div>
        </>
    )
}