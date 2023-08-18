import {GetItems} from "./apiService";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import {ItemList} from "../components/itemComponent/itemList"
import {ItemForm} from "../components/itemComponent/itemDetail"

import { useParams } from "react-router-dom";

export function Detail(){
    const {itemName,itemID} = useParams();
    return(<div>
            <h1>Formulario de {itemName}</h1>
            <ItemForm itemName={itemName} item={itemID}/>
        </div>);
}

export function ItemForm(){
    const [itemName,itemID,act] = useParams();
    const [items,setItems] = useState([])
    const [item,setItem] = useState({})
    useEffect(() =>{
        setItems(GetItems(itemName));
        }
    ,[itemName])
    setItem(items.find(item => item.id === itemID));
    if(act === 'Create'){
        return(<CreateForm />)
    }else if (act === 'Modify') {
        return(<UpdateForm item={item}/>)
    }else if(act === 'Delete'){
        return(<DeleteForm item={item}/>)
    }else {
        return(<ReadForm item={item}/>)
    }
  }