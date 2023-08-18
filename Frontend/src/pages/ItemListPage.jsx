import {GetItems} from "./apiService.jsx"
import {BsTrash} from "react-icons/bs"
import {BiEdit} from "react-icons/bi"
import {HiOutlineEye} from "react-icons/hi"
import {MdAddCircle} from "react-icons/md"
import {Link,useLoaderData} from "react-router-dom";

export function List(){
    const {itemName} = useParams();
    const items = useLoaderData();
    //Busca en un item el nombre de sus atributos
    var itemHeader = [];
    if(items[0]!=null & (itemHeader).length === 0){
        itemHeader = Object.keys(items[0])
    }

    return(
        <div className="view-details">
            <h1>Tabla de {itemName}</h1>
            <Link to={`detail/${null}/`}>
                <button><MdAddCircle/>Nuevo</button>
            </Link>
            <table>
                <thead>
                    <fillHeader itemHeader={itemHeader}/>   
                </thead>
                <tbody>
                    <fillRows items={items}/>
                </tbody>
            </table>
        </div>
    );
}

function fillHeader(itemHeader){
    return(
        <>
            <tr>{itemHeader.map((name,index) => {
                return (<th key={index}>{name}</th>)
            })}</tr>
            <tr></tr>
        </>
    )
}

function fillRows(items){
    return (
        items.map((item) => {
            return(
                <tr key={item.id}>{
                Object.values(item).map((att,index) => {
                     return <th key={index}>{att}</th> 
                    })
                }
                <addButtons item={item}/>
                </tr>
            )
        })
    )
}

function addButtons(item){
    return(
        <>
        <th>
            <Link to={`detail/${item.id}`}>
                <button><HiOutlineEye/></button>
            </Link>
        </th>
        <th>
            <Link to={`detail/${item.id}`}>
            <button><BiEdit/></button>
            </Link>
        </th>
        <th>
            <Link to={`detail/${item.id}`}>
                <button><BsTrash/></button>
            </Link>
        </th>
        </>
    );
}