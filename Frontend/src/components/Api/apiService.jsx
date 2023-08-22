import axios from "axios"
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const inventarioAPI = axios.create()
inventarioAPI.defaults.baseURL = "http://127.0.0.1:8000"


export var resources ={
    TipoInsumo:['id','nombre','descripcion']
}

export function ListItems(setItems){
    const {item: itemName} = useParams();
    const url = `${itemName}/api/v1/${itemName}`;      
    useEffect(() => {
        async function loadItems(){
            const jsonItem = await inventarioAPI.get(url);
            setItems(jsonItem.data)
        }
        loadItems()
    },[url,setItems]);
}

export function ReadItem(setItem){
    const {item: itemName,id}= useParams();
    const url = `${itemName}/api/v1/${itemName}/${id}/`;
    useEffect(() => {
        async function loadItem(){
            const jsonItem = await inventarioAPI.get(url);
            setItem(jsonItem.data)
        }
        loadItem()
    },[url,setItem]);
}

export async function FormLoader({ request }){
    let url = new URL(request.url);
    return(null)
}

export async function FormSubmitter({request,params}){
    const item = params.item;
    const id =params.id
    //FormData to object
    let formData = await request.formData();
    var data={}
    for (const [key,val] of formData) {
        data[key]=val;
    }
    //importante que la url este correcta
    const url = `${item}/api/v1/${item}/`;
    var result;
    try{
        switch(request.method){
            case "POST":
                result = await inventarioAPI.post(url,data);
                break;
            case "PUT":
                result = await inventarioAPI.put(url.concat(`${id}/`),data);
                break;
            case "DELETE":
                result = await inventarioAPI.delete(url.concat(`${id}/`));
                break;
        }
    }catch(error){
        result = error.response.data
    }
    <Link to="../../" relative="path"/>
    console.log(result)
    return null;
}