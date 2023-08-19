import { createBrowserRouter,redirect } from "react-router-dom";
import { GetItem as ItemLoader,GetItems as ItemsLoader} from "./components/Api/apiService";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Dashboard from "./pages/DashboardPage";
import  ItemList  from "./pages/ItemListPage";
import ItemDetail from "./pages/ItemDetailPage";

const routes = [
  {
    path: "/",
    loader: async () => (
      redirect("/home")
    )
  },
  {
    path: "/home",
    loader: async () => (
      redirect("/Dashboard")
    ),
    element: <Home/>,
    Children: [
      {
        path:"/home/about",
        element:<About/>
      }
    ]
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
    Children : [
      {
        element:<Graphs/>
      },
      {
        path:"/Dashboard/inventario/:item",
        loader: ItemsLoader,
        element: <ListItemPage/>
      },
      {
        path:"/Dashboard/inventario/:item/detail/:id",
        loader: ItemLoader,
        element: <DetailItemPage/>
      }
    ]
  },
]
const router = createBrowserRouter(routes);
export default router;


/* (Codigo que genera rutas a partir de una lista)
const itemNames =[
    "Insumo",
    "TipoInsumo",
    "Herramienta",
    "TipoHerramienta",
]

function getItemRoutes(itemNames){
  var routes = itemNames.map((name) => {
  return ({
      path: "/inventario/".concat(name),
      loader: ItemsLoader,
      element: <ListItemPage/>
    })
  })
  itemNames.map((name) => (
    routes.push(
      {
        path: "/inventario/".concat(name).concat("/detail/:itemId/:act"),
        loader: ItemLoader,
        element: <DetailItemPage/>
      }
    )
    ),routes)
  return routes;  
}
*/