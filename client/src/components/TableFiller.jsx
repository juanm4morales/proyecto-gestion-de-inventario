import { getAllTipoInsumo } from "api/Deserializer";
import { TipoInsumoCard } from "./TipoInsumoCard";
import {useEffect, useState} from "react"
import { Table } from "reactstrap";

export function FillTable(){
    const [tiposinsumo,setTiposInsumo] = useState([]);
    var attNames = [];

    useEffect(() => {
        async function loadTiposInsumo(){
            const tipoinsumo = await getAllTipoInsumo();
            setTiposInsumo(tipoinsumo.data)
        }
        loadTiposInsumo()
    },[]);    

    //busca el header pero es asyncrono
    if(tiposinsumo[0]!=null & (attNames).length==0){
        attNames = Object.keys(tiposinsumo[0])
    }

    return (
        <Table responsive>    
        <thead className="text-primary">
            <tr>{   
                attNames.map((name,index) => {return (<th key={index}>{name}</th>)})
            }
            <th>Acciones</th>
            </tr>
        </thead>
        <tbody>{
            tiposinsumo.map((tipoinsumo) =>TipoInsumoCard(tipoinsumo))
        }</tbody>
    </Table>
    );
}
