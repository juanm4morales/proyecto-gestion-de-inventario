import { GridColDef } from "@mui/x-data-grid"
import "./add.scss"

type Props = {
    slug: string,
    columns: GridColDef[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;

}
/**
 * Formulario a desplegar cuando se intenta agregar un item
 * @param props - Propiedades que tendrá el componente Add
 * @returns Form con los datos del nuevo item a agregar
 */
export const Add = (props: Props) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // add new item
        // axios.post(`/api/&{slug}s`)
    }

    return (
        <div className="add">
            <div className="modal">
                <span className="close" onClick={()=>props.setOpen(false)}>X</span>
                <h1>Add new {props.slug}</h1>
                <form onSubmit={handleSubmit}>
                    {props.columns
                    .filter(item=>item.field !== "id" && item.field !== "img")
                    .map(column => (
                        <div className="item">
                            <label htmlFor="">{column.headerName}</label>
                            <input type={column.type} placeholder={column.field} />
                        </div>
                    ))}
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}