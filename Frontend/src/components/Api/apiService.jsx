import axios from "axios"
import { useLocation, useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const inventarioAPI = axios.create()
inventarioAPI.defaults.baseURL = "http://127.0.0.1:8000"

async function Deserializer(url){
    return inventarioAPI.get(url);
}

export function GetItem({params}){
    const name = params.item;
    const itemID = params.itemID;
    const location = useLocation();
    const [item,setItem] = useState([])
    
    const url = `${name}/api/v1/${name}/${itemID}`;
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

export function GetItems({params}){
    const [items,setItems] = useState([])
    const name = params.item
    const url = `${name}/api/v1/${name}`;      
    useEffect(() => {
        async function loadItems(){
            const jsonObj = await Deserializer(url);
            setItems(jsonObj.data)
        }
        loadItems()
    },[url]);
    return items;
}