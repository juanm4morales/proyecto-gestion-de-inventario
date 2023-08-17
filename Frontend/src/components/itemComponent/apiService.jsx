import axios from "axios"
import { useState,useEffect } from "react";

const inventarioAPI = axios.create()
inventarioAPI.defaults.baseURL = "http://127.0.0.1:8000"

function Deserializer(itemName){
    return inventarioAPI.get(itemName.concat("/api/v1/").concat(itemName));
}

export function GetItems(itemName){
    const [items,setItem] = useState([]);

    useEffect(() => {
        async function loadItem(){
            const jsonObj = await Deserializer(itemName);
            setItem(jsonObj.data)
        }
        loadItem()
    },[]);    
    
    return items;
}