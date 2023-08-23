import axios from "axios"
import { useEffect } from "react";
import { Link, useParams,useLocation } from "react-router-dom";

const inventarioAPI = axios.create()
inventarioAPI.defaults.baseURL = "http://127.0.0.1:8000"

export function ListItems(setItems){
    const {item,module} = GetUrlParts();
    const url = `${module}/${item}/`;;      
    useEffect(() => {
        async function loadItems(){
            const jsonItem = await inventarioAPI.get(url);
            setItems(jsonItem.data)
        }
        loadItems()
    },[url,setItems]);
}

export function ReadItem(setItem){
    const {item,module} = GetUrlParts();
    const {id} = useParams()
    const url = `${module}/${item}/${id}`;
    useEffect(() => {
        async function loadItem(){
            const jsonItem = await inventarioAPI.get(url);
            setItem(jsonItem.data)
        }
        loadItem()
    },[url,setItem]);
}

export async function FormLoader({ request }){
    //let url = new URL(request.url);
    return(null)
}

export async function FormSubmitter({request,params}){
    
    //importante que la url este correcta
    const {item,module} = GetUrlParts();
    const id = params.id
    const url = `${module}/${item}/${id}`;
    
    //FormData to object
    let formData = await request.formData();
    var data={}
    for (const [key,val] of formData) {
        data[key]=val;
    }

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
            default:{}
        }
    }catch(error){
        result = error.response.data
    }
    <Link to="../../" relative="path"/>
    console.log(result)
    return null;
}

async function getResources(){
  var data = {};
  try{
    const request = await inventarioAPI.get('models_info');
    data = request.data;
  }catch(error){console.log(error)}  
  return data;
}

export const resources = await getResources();


export function GetUrlParts(){
    const location = useLocation()
    const parts = location.pathname.split("/").filter(part => part !== '');
    const keys = ["dashboard","module","item"]
    const objeto = Object.assign({}, ...parts.map((valor, index) => ({ [keys[index]]: valor })));
    return objeto;
}