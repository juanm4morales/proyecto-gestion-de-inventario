import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Home from "./pages/home/Home"
import Inventory from "./pages/inventory/Inventory"
import Login from "./pages/login/Login";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Outlet
} from "react-router-dom";

import "./styles/global.scss"
import Users from "./pages/users/Users"
import User from "./pages/user/User";
import Item from "./pages/item/Item";

function App() {

    const Layout = () => {
        return (
            <div className="main">
                <Navbar />
                <div className="container">
                    <div className="menuContainer">
                        <Menu />
                    </div>
                    <div className="contentContainer">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/users",
                    element: <Users />
                },  
                {
                    path: "/inventory",
                    element: <Inventory />
                },
                {
                    path: "users/:id",
                    element: <User />
                },
                {
                    path: "inventory/:id",
                    element: <Item />
                }
            ]
        },
        {
            path: "/login",
            element: <Login />
        }
    ]);
    

    return (
        <RouterProvider router={router} />
    )
}

export default App
