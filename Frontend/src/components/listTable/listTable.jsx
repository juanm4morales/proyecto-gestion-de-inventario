import GetItem from "../../api/deserializer.js"
import { useState,useEffect } from "react";
import {BsTrash} from "react-icons/bs"
import {BiEdit} from "react-icons/bi"
import {HiOutlineEye} from "react-icons/hi"

export function ListTable(item){
    
    const [items,setItemObj] = useState([]);
    
    useEffect(() => {
        async function loadItem(){
            const jsonObj = await GetItem(item);
            setItemObj(jsonObj.data)
        }
        loadItem()
    },[]);    
    
    //Busca en un item el nombre de sus atributos
    var itemHeader = [];
    if(items[0]!=null & (itemHeader).length == 0){
        itemHeader = Object.keys(items[0])
    }
    
    return(
        <div className="">
            <table>
                <thead>
                    <tr>{   
                        itemHeader.map((name,index) => {return (<th key={index}>{name}</th>)})
                    }</tr>
                    <tr></tr>
                </thead>
                <tbody>
                {
                    items.map(        
                        (item) => {
                            {console.log(Object.values(item))}
                            return(
                                <tr key={item.id}>{
                                Object.values(item).map((att,index) => {
                                     return <th key={index}>{att}</th> 
                                    })
                                }
                                <th><button icon={<HiOutlineEye/>}></button></th>
                                <th><button icon={<BiEdit/>}></button></th>
                                <th><button icon={<BsTrash/>}></button></th>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
            </table>
        </div>
    );
} 