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

export function CreateItem(){
    const {item}= useParams();
    
    const url = `${item}/api/v1/${item}`;
    useEffect(() => {
        async function sendItem(){
            const jsonItem = await inventarioAPI.post(url,data);
            setItem(jsonItem.data)
        }
        sendItem()
    },[url,setItem]);
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
export function UpdateItem(){

}
export function DeleteItem(){

}
