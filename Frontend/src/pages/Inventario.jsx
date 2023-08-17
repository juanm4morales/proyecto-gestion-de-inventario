import {ItemList} from "../components/itemComponent/itemList"

export default function Inventario(){
    return(
        <div>
            <h1>Tabla de TipoInsumo:</h1>
            {ItemList("TipoInsumo")}
        </div>
    );
}