import {BsTrash} from "react-icons/bs"
import {BiEdit} from "react-icons/bi"
import {HiOutlineEye} from "react-icons/hi"
import {MdAddCircle} from "react-icons/md"
import {Link,useLoaderData,useParams} from "react-router-dom";

export function List(){
    const {item} = useParams();
    const items = useLoaderData();
    
    return(
        <div className="view-details">
            <h1>Tabla de {item}</h1>
            <Link to={`detail/${null}/`}>
                <button><MdAddCircle/>Nuevo</button>
            </Link>
            <table>
                <thead>
                    <fillHeader items={items}/>   
                </thead>
                <tbody>
                    <fillRows items={items}/>
                </tbody>
            </table>
        </div>
    );
}

function fillHeader(items){
    return(
        <>{items.length ? (<tr>{
            Object.keys(items[0]).map((name,index) => {
                return (<th key={index}>{name}</th>)
            })
            }</tr>
         ):(<th></th>)}
            <th></th>
        </>
    );
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