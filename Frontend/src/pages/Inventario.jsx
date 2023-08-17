import {ListTable} from "../components/listTable/listTable"

export default function Inventario(){
    return(
        <div>
            <h1>Tabla de TipoInsumo:</h1>
            {ListTable("TipoInsumo")}
        </div>
    );
}