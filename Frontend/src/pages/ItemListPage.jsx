//icons
import {BsTrash} from "react-icons/bs"
import {BiEdit} from "react-icons/bi"
import {HiOutlineEye} from "react-icons/hi"
import {MdAddCircle} from "react-icons/md"

import {Link,useParams} from "react-router-dom";
import { useState,useEffect } from "react";
import { GetItems } from "../components/Api/apiService";

import {  } from "axios";

export function List(){
    const {item} = useParams();
    const [items,setItems]= useState([]);
    try{
        GetItems(setItems);
        console.log("no error")
    }catch(Error){
        console.log("se hizo")
        throw new Error("El recurso ".concat(item).concat(" no existe."))
    }
    return(
        <div className="view-details">
            <h1>Tabla de {item}</h1>
            <Link to={`detail/${null}/` state={{op:Create}}}>
                <button><MdAddCircle/>Nuevo</button>
            </Link>
            {BuildTable(items)}
        </div>
    );
}

function BuildTable(items){
    const [table,setTable] = useState(<h3>No hay insumos de este tipo</h3>);
    useEffect(()=>{
        if (items.length > 0){
            console.log(items)
            const t = <table>
                        <thead>
                            <FillHeader items={items}/>
                        </thead>
                        <tbody>
                            <FillRows items={items}/>
                        </tbody>
                    </table>
            setTable(t) 
        }
    },[setTable,items]);
    return (table);
}

function FillHeader({items}){
    console.log(items)
    var header = Object.keys(items[0])
    return(
        <>
            <tr>{ 
                header.map((itemName,index) => {
                    return (<th key={index}>{itemName}</th>)
                })
            }
            <th></th>
            </tr>
        </>
    );
}

function FillRows({items}){
    return (
        items.map((item) => {
            console.log(item)
            var values = Object.values(item)
            return(
                <tr key={item.id}>{
                values.map((att,index) => {
                     return <th key={index}>{att}</th> 
                    })
                }
                <AddButtons item={item}/>
                </tr>
            )
        })
    )
}

function AddButtons(item){
    return(
        <>
        <th>
            <Link to={`detail/${item.id}` state={{op:"Read"}}>
                <button><HiOutlineEye/></button>
            </Link>
        </th>
        <th>
            <Link to={`detail/${item.id}`} state={{op:"Update"}}>
            <button><BiEdit/></button>
            </Link>
        </th>
        <th>
            <Link to={`detail/${item.id}`} state={{op:"Delete"}}>
                <button><BsTrash/></button>
            </Link>
        </th>
        </>
    );
}