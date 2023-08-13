export function TipoInsumoCard(tipoinsumo){
    return (
        <tr key = {tipoinsumo.id}>
            <td>{tipoinsumo.id}</td>
            <td>{tipoinsumo.nombre}</td>
            <td>{tipoinsumo.descripcion}</td>
        </tr>
    );
}