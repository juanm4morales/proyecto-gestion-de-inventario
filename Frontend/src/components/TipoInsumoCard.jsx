import { FaEdit,FaTrash } from "react-icons/fa";
import {CiRead} from "react-icons/ci"
export function TipoInsumoCard(tipoinsumo){
    return (
        <tr key = {tipoinsumo.id}>
            <td>{tipoinsumo.id}</td>
            <td>{tipoinsumo.nombre}</td>
            <td>{tipoinsumo.descripcion}</td>
            <td>
                <button type="button"><CiRead/></button>
                <button type="button"><FaEdit/></button>
                <button type="button"><FaTrash/></button>
            </td>
        </tr>
    );
}