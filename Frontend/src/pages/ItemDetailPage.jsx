import {useParams,Form, useLocation } from "react-router-dom";
import { CreateItem,DeleteItem, ReadItem, UpdateItem } from "../components/Api/apiService";
import { useState } from "react";

const [formData,setFormData] = useState({});

export function Detail(){
    const {item} = useParams();
    const {op} = useLocation();
    const form = <></>;
    if(op=="Create"){
        form=<>
                <h1>Crear nuevo {item}</h1>
                <Form method="POST" onSubmit={<CreateItem/>} onChange={handleInputChange}/>
                {Object.keys(item).map((att)=>{return(<input type="text" name={att}/>)})}
                <button type="submit">Crear</button>
            </>
    }else{
        const [ReadItem,SetReadItem] = useState([])
        ReadItem(SetReadItem)
        switch(op){
            case "Read":
            form=<>
                <h1>Ver {item}</h1>
                {Object.keys(ReadItem).map((att)=>{return(<input type="text" name={att} value={ReadItem[att]} disabled/>)})}
                <button type="submit" disabled>Guardar</button>
            </>
            break;
        case "Update":
            form=<>
                <h1>Modificar {item}</h1>
                <Form method="PUT" onSubmit={<UpdateItem/>} onChange={handleInputChange}/>
                {Object.keys(ReadItem).map((att)=>{return(<input type="text" name={att} value={ReadItem[att]} disabled/>)})}
                <button type="submit">Modificar</button>
            </>
            break;
        case "Delete":
            form=<>
                <h1>Eliminar {item}</h1>
                <Form method="DELETE" onSubmit={<DeleteItem/>}/>
                {Object.keys(ReadItem).map((att)=>{return(<input type="text" name={att} value={ReadItem[att]} disabled/>)})}
                <button type="submit">Eliminar</button>
            </>
            break;
        }
    }
    return(
    <div>
        {form}
        <Link to={useLocation()}><button type="button">Atrás</button></Link>
    </div>);
  }

  function handleInputChange(typedData){
    console.log(typedData)
    setFormData(typedData);
  }