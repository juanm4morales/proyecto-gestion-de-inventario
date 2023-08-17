import GetItem from "../../api/deserializer.js"
import { useState,useEffect } from "react";
import {BsTrash} from "react-icons/bs"
import {BiEdit} from "react-icons/bi"
import {HiOutlineEye} from "react-icons/hi"
import {MdAddCircle} from "react-icons/md"
import { Link} from "react-router-dom";

export function ItemList(itemName){
    
    const [items,setItemObj] = useState([]);
    
    useEffect(() => {
        async function loadItem(){
            const jsonObj = await GetItem(itemName);
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
        <div className="view-details">
            <Link to={("inventario/".concat(itemName)).concat("Form")}>
                <button><MdAddCircle/>Nuevo</button>
            </Link>
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
                                <th>
                                    <Link to={("inventario/".concat(itemName)).concat("Form")}>
                                        <button><HiOutlineEye/></button>
                                    </Link>
                                </th>
                                <th>
                                    <Link to={("inventario/".concat(itemName)).concat("Form")}>
                                        <button><BiEdit/></button>
                                    </Link>
                                </th>
                                <th>
                                    <Link to={("inventario/".concat(itemName)).concat("Form")}>
                                        <button><BsTrash/></button>
                                    </Link>
                                </th>
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