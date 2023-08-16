import {useForm} from "react-hook-form"
import { Link } from "react-router-dom";
import { Card } from "reactstrap";

export default function InventarioForm(){
    const {register,handleSubmit} = useForm();

    return(
        <Card>
            HOLA
            <div>
            <form onSubmite={handleSubmit}/>
            <input 
                type = "text" 
                placeholder="title" 
                {...register("title",{required: true})}
                />
            <textarea
                rows="3"
                placeholder="Description"
                {...register("title",{required: true})}
                ></textarea>
            <button type="submit">Guardar</button>
            <Link to="/admin/TipoInsumo/">
                <button>Cancelar</button>
            </Link>
            </div>
        </Card>
    )
}