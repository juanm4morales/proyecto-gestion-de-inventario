//icons
import {BsTrash} from "react-icons/bs"
import {BiEdit} from "react-icons/bi"
import {HiOutlineEye} from "react-icons/hi"
import {MdAddCircle} from "react-icons/md"

import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
import { ListItems ,resources,GetUrlParts } from "../components/Api/apiService";

export function ItemList(){
    const {module:moduleName,item:itemName} = GetUrlParts();
    const [items,setItems]= useState([]);
    useEffect(() => {
        // Restablecer la variable al valor predeterminado
        setItems([]);
      }, [window.location.href]);
    try{
        ListItems(setItems);
    }catch(Error){
        throw new Error(`El recurso ${itemName} no existe.`)
    }
    return(
        <div className="view-details">
            <h1>Tabla de {itemName}</h1>
            <Link to={`Create/`}>
                <button><MdAddCircle/>Nuevo</button>
            </Link>
            {BuildTable(moduleName,itemName,items)}
        </div>
    );
}

function BuildTable(moduleName,itemName,items){
    const [table,setTable] = useState(<h3>La lista esta vacía</h3>);
    useEffect(()=>{
        if (items.length > 0){
            const t = <table>
                        <thead>
                            <FillHeader moduleName={moduleName} itemName={itemName}/>
                        </thead>
                        <tbody>
                            <FillRows items={items}/>
                        </tbody>
                    </table>
            setTable(t) 
        }else{
            setTable(<h3>La lista esta vacía</h3>)
        }
    },[setTable,items,itemName,moduleName]);
    return (table);
}

function FillHeader({moduleName,itemName}){
    const header = resources[moduleName][itemName]
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
    const list = items.map((item) => {
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
    return list
}

function AddButtons({item}){
    return(
        <>
        <th>
            <Link to={`Read/${item.id}`}>
                <button><HiOutlineEye/></button>
            </Link>
        </th>
        <th>
            <Link to={`Update/${item.id}`}>
            <button><BiEdit/></button>
            </Link>
        </th>
        <th>
            <Link to={`Delete/${item.id}`}>
                <button><BsTrash/></button>
            </Link>
        </th>
        </>
    );
}