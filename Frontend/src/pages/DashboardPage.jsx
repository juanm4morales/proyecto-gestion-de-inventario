import { Outlet } from "react-router-dom";

export default Dashboard(){
    return(
    //layout route
    <>
        <div className="sidebar">
            <h1>Main Page</h1>
            <h2>Inventario</h2>
            <nav>
                <ol>
                    {itemNames.map((name,index) => (
                        <li key={index}>
                            <Link to={'inventario/'.concat(name).concat('/')}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
        <div className="SideBar">
        </div>
        <div><Outlet /></div>
    </>
    );
}