import {useParams,Form, Link, useLoaderData} from "react-router-dom";
import {ReadItem,resources} from "../components/Api/apiService";
import { useState } from "react";

/**
 * Se encarga de actualizar la variable de estado cuyo objeto se muestra en los campos.
 * @param {*} item 
 * @param {*} att 
 * @param {*} setData 
 * @returns 
 */
const handleInputChange = (item,att,setData) => (event)=> {
    setData((item) => ({ ...item, [att]: event.target.value }))
}

function ItemForm(op){
    const {itemName} = useParams();
    const [itemObj,setItemObj]= useState(useLoaderData() || [])
    const attributes = resources[itemName]
    if(op!=="Create"){
        ReadItem(setItemObj)
    }
    const form = <></>;
    switch(op){
        case "Create":{form = <>
            <h1>Crear nuevo {item}</h1>
            <Form method="POST">
                {attributes.map((att,index)=>{
                    if(index!==0){
                        return(<div key={index} >{att}<input type="text"  value={itemObj[att]||''} name={att} onChange={handleInputChange(itemObj,att,SetNewItem)}/></div>);
                    }
                })}
                <button type="submit">Crear</button>
            </Form>
        </>}
        case "Read":{form = <>
            <h1>Ver {item}</h1>
            <Form method="GET">
                {attributes.map((att,index)=>{return(
                <div key={index}>{att}<input type="text" name={att} value={ReadItem[att]||''} onChange={handleInputChange(ReadItem,att,SetReadItem)}/></div>)})}
                <button type="submit" disabled>Modificar</button>
            </Form>
        </>}
        case "Update":{form = <>
            <h1>Modificar {item}</h1>
            <Form method="POST">
                {attributes.map((att,index)=>{return(<div key={index}>{att}<input type="text" name={att} value={ReadItem[att]||''} onChange={handleInputChange(ReadItem,att,SetReadItem)}/></div>)})}
                <button type="submit">Modificar</button>
            </Form>
        </>}
        case "Delete":{form = <> 
            <Form method="DELETE">
                {attributes.map((att,index)=>{return(<div key={index}>{att}<input type="text" name={att} value={ReadItem[att]||''} state={{op:'Delete'}} disabled/></div>)})}
                <button type="submit">Eliminar</button>
            </Form>
        </>}
        default:{}
    }
    return(
    <div>
        {form}
        <Link to={`/Dashboard/inventario/${item}`}><button type="button">Atrás</button></Link>
    </div>);
}

export function CreateForm(){
    return ItemForm("Create")
}
export function UpdateForm(){
    return ItemForm("Update")
}
export function ReadForm(){
    return ItemForm("Read")
}
export function DeleteForm(){
    return ItemForm("Delete")
}