import {GetItems} from "./apiService";

function CreateForm(){
    return(<h1>Crear</h1>)
}

function UpdateForm(item){
    return(<h1>Modificar</h1>)
}

function DeleteForm(item){
    return(<h1>Eliminar</h1>)
}

function ReadForm(item){
    return(<h1>Leer</h1>)
}

export function ToForm(itemName,itemId,act) {
    const items = GetItems(itemName);
    const item = items.find(item => item.id === itemId);
    if(act === 'Create'){
        return(<CreateForm />)
    }else if (act === 'Modify') {
        return(<UpdateForm item={item}/>)
    }else if(act === 'Delete'){
        return(<DeleteForm item={item}/>)
    }else {
        return(<ReadForm item={item}/>)
    }
  }