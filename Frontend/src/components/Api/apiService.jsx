import axios from "axios"
import { useLocation, useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const inventarioAPI = axios.create()
inventarioAPI.defaults.baseURL = "http://127.0.0.1:8000"

async function Deserializer(url){
    return inventarioAPI.get(url);
}

export function GetItem(){
    const [name,itemID] = useParams();
    const url = `${name}/api/v1/${name}/${itemID}`;
    const location = useLocation();
    
    const [item,setItem] = useState([])
    setItem(Deserializer(url));
    useEffect(() => {
        async function loadItem(){
            const jsonObj = await Deserializer(url);
            setItem(jsonObj.data)
        }
        loadItem()
    },[url]);  
    return item;  
}
export function GetItems(){
    const [name] = useParams();
    const url = `${name}/api/v1/${name}`;

    const [item,setItem] = useState([])
    setItem(inventarioAPI.get(url));
    useEffect(() => {
        async function loadItem(){
            const jsonObj = await Deserializer(url);
            setItem(jsonObj.data)
        }
        loadItem()
    },[url]);    
    return item;
}