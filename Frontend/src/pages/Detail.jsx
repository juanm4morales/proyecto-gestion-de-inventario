import {ToForm} from "../components/itemComponent/itemDetail"
import { useParams } from "react-router-dom";

export default function Detail(){
    const {itemName,itemId,act} = useParams();
    return(<ToForm itemName={itemName} item={itemId} act={act}/>);
}