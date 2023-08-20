//icons
import {BsTrash} from "react-icons/bs"
import {BiEdit} from "react-icons/bi"
import {HiOutlineEye} from "react-icons/hi"
import {MdAddCircle} from "react-icons/md"

import {Link,useParams} from "react-router-dom";
import { useState,useEffect } from "react";
import { ListItems } from "../components/Api/apiService";

import {resources} from "../components/Api/apiService"

export function List(){
    const {item} = useParams();
    const [items,setItems]= useState([]);
    try{
        ListItems(setItems);
    }catch(Error){
        throw new Error("El recurso ".concat(item).concat(" no existe."))
    }
    return(
        <div className="view-details">
            <h1>Tabla de {item}</h1>
            <Link to={`detail/${"new"}/`} state={{op:"Create"}}>
                <button><MdAddCircle/>Nuevo</button>
            </Link>
            {BuildTable(item,items)}
        </div>
    );
}

function BuildTable(itemName,items){
    const [table,setTable] = useState(<h3>No hay insumos de este tipo</h3>);
    useEffect(()=>{
        if (items.length > 0){
            const t = <table>
                        <thead>
                            <FillHeader itemName={itemName}/>
                        </thead>
                        <tbody>
                            <FillRows items={items}/>
                        </tbody>
                    </table>
            setTable(t) 
        }
    },[setTable,items,itemName]);
    return (table);
}

function FillHeader({itemName}){
    var header = resources[itemName]
    return(
        <>
            <tr>{ 
                header.map((itemAtt,index) => {
                    return (<th key={index}>{itemAtt}</th>)
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
            //console.log(item)
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

function AddButtons({item}){
    return(
        <>
        <th>
            <Link to={`detail/${item.id}`} state={{op:"Read"}}>
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