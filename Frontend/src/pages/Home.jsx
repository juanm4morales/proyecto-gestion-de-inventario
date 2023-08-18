import React from "react";
import { Link, Outlet } from "react-router-dom";
import {itemNames} from "../itemNames"

export default function home(){
    return(
        <>
        <div className="sidebar">
            <h1>Main Page</h1>
            <div>
                <h2>Inventario</h2>
                <nav>
                    <ol>
                        {itemNames.map((name,index) => (
                            <li key={index}>
                                <Link to={'inventario/'.concat(name).concat('/')}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
        <div className="detail">
                <Outlet/>
            </div>
        </>
    )
}