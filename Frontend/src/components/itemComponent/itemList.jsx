import {GetItems} from "./apiService.jsx"
import {BsTrash} from "react-icons/bs"
import {BiEdit} from "react-icons/bi"
import {HiOutlineEye} from "react-icons/hi"
import {MdAddCircle} from "react-icons/md"
import {Link} from "react-router-dom";

export function ItemList(itemName){
    
    const items = GetItems(itemName);
    //Busca en un item el nombre de sus atributos
    var itemHeader = [];
    if(items[0]!=null & (itemHeader).length === 0){
        itemHeader = Object.keys(items[0])
    }
    
    return(
        <div className="view-details">
            <Link to={`detail/${null}/${"create"}`}>
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
                            return(
                                <tr key={item.id}>{
                                Object.values(item).map((att,index) => {
                                     return <th key={index}>{att}</th> 
                                    })
                                }
                                <th>
                                    <Link to={`detail/${item.id}/${"Read"}`}>
                                        <button><HiOutlineEye/></button>
                                    </Link>
                                </th>
                                <th>
                                    <Link to={`detail/${item.id}/${'Update'}`}>
                                    <button><BiEdit/></button>
                                    </Link>
                                </th>
                                <th>
                                    <Link to={`detail/${item.id}/${'Delete'}`}>
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