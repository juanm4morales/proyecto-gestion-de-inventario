import axios from "axios"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const inventarioAPI = axios.create()
inventarioAPI.defaults.baseURL = "http://127.0.0.1:8000"

export function ListItems(setItems){
    const {item} = useParams();
    const url = `${item}/api/v1/${item}`;      
    useEffect(() => {
        async function loadItems(){
            const jsonItem = await inventarioAPI.get(url);
            setItems(jsonItem.data)
        }
        loadItems()
    },[url,setItems]);
}

export function ReadItem(setItem){
    const {item,id}= useParams();
    const url = `${item}/api/v1/${item}/${id}`;
    useEffect(() => {
        async function loadItem(){
            const jsonItem = await inventarioAPI.get(url);
            setItem(jsonItem.data)
        }
        loadItem()
    },[url,setItem]);
}

export async function FormLoader({ request }){
    console.log(request)
    let url = new URL(request.url);
    let searchTerm = url.searchParams.get("q");
    return fakeSearchProducts(searchTerm);
}

export async function FormSubmitter({request,params}){
    console.log(params)
    const {item}= useParams();
    const url = `${item}/api/v1/${item}`;
    useEffect(() => {
        async function sendRequest(){
            switch(request.method){
                case "POST":
                    await inventarioAPI.post(url,itemData);
                    break;
                case "PUT":
                    await inventarioAPI.put(url,itemData);
                    break;
                case "DELETE":
                    inventarioAPI.delete(url);
                    break;
            }
        }
        sendRequest()
    },[url,itemData]);
}

export var resources ={
    TipoInsumo:['id','nombre','descripcion']
}