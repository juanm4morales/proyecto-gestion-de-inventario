import {useParams,useLoaderData } from "react-router-dom";

export function Detail(){
    const [itemName,itemID] = useParams();
    const items = useLoaderData();
    
    return(<div>
        <h1>Formulario de {itemName}</h1>
    </div>);
  }