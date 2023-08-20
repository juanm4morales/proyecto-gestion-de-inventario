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

export function CreateItem(itemData){
    const {item}= useParams();

    const url = `${item}/api/v1/${item}`;
    useEffect(() => {
        async function sendCreateItem(){
            inventarioAPI.post(url,itemData);
        }
        sendCreateItem()
    },[url,itemData]);
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
export function UpdateItem(itemData){
    console.log(itemData)
    const {item,id}= useParams();
    const url = `${item}/api/v1/${item}/${id}`;
    useEffect(() => {
        console.log('updating')
        async function sendItem(){
            await inventarioAPI.put(url);
        }
        sendItem()
    },[url,itemData]);
}
export function DeleteItem(){
    const {item,id}= useParams();
    const url = `${item}/api/v1/${item}/${id}`;
    useEffect(() => {
        async function sendDeleteItem(){
            inventarioAPI.delete(url);
        }
        sendDeleteItem()
    },[url]);
}
