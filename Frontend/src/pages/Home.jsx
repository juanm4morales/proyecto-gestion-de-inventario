import React from "react";
import { Link } from "react-router-dom";

export default function home(){
    return(
        <div className="">
            <h1>HOLA</h1>
            <Link to="/inventario/TipoInsumo">TipoInsumo</Link>
        </div>
    )
}