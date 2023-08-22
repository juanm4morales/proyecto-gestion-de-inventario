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
    const {item: itemName} = useParams()
    const [itemObj,setItemObj]= useState(useLoaderData() || [])
    const attributes = resources[itemName]
    if(op!=="Create"){
        ReadItem(setItemObj)
    }
    var form = <></>;
    switch(op){
        case "Create":{form = <>
            <h1>Crear nuevo {itemName}</h1>
            <Form method="POST">
                {attributes.map((att,index)=>{
                    if(index!==0){
                        return(<div key={index} >{att}<input type="text"  value={itemObj[att]||''} name={att} onChange={handleInputChange(itemObj,att,setItemObj)}/></div>);
                    }else{
                        return(<div key={index}></div>)
                    }
                })}
                <button type="submit">Crear</button>
            </Form>
        </>}
        break;
        case "Read":{form = <>
            <h1>Ver {itemName}</h1>
            <Form method="GET">
                {attributes.map((att,index)=>{return(
                <div key={index}>{att}<input type="text" name={att} value={itemObj[att]||''} onChange={handleInputChange(itemObj,att,setItemObj)}disabled/></div>)})}
                <button type="submit" disabled>Modificar</button>
            </Form>
        </>}
        break;
        case "Update":{form = <>
            <h1>Modificar {itemName}</h1>
            <Form method="PUT">
                {attributes.map((att,index)=>{return(<div key={index}>{att}<input type="text" name={att} value={itemObj[att]||''} onChange={handleInputChange(itemObj,att,setItemObj)}/></div>)})}
                <button type="submit">Modificar</button>
            </Form>
        </>}
        break;
        case "Delete":{form = <> 
            <h1>Eliminar {itemName}</h1>
            <Form method="DELETE" to="../../" relative="path">
                {attributes.map((att,index)=>{return(<div key={index}>{att}<input type="text" name={att} value={itemObj[att]||''} state={{op:'Delete'}} disabled/></div>)})}
               <button type="submit">Eliminar</button>
            </Form>
        </>}
        break;
        default:{}
    }
    return(
    <div>
        {form}
        <Link to={`/Dashboard/inventario/${itemName}`}><button type="button">Atrás</button></Link>
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