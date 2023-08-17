
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

function toForm(props) {
    const { location } = props;

    if (location.pathname === '/inventario/TipoInsumo') {
        return ();
    }else if(location.pathname === '/contact'){
        return ();
    }else {
        return ();
    }
  }