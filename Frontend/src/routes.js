import { createBrowserRouter,redirect} from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Dashboard from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage"
import {ItemList}  from "./pages/ItemListPage";
import {CreateForm,ReadForm,UpdateForm,DeleteForm} from "./pages/ItemDetailPage";
import {ReadItem,FormSubmitter,FormLoader} from "./components/Api/apiService"

/**
 * Variable que contiene las rutas que se renderizarán.
 * Algunas consideraciones:
 * Capos de un objeto tipo ruta en este formato de declaración:
 * interface RouteObject {
      path?: string;
      index?: boolean;
      children?: React.ReactNode;
      caseSensitive?: boolean;
      id?: string;
      loader?: LoaderFunction;
      action?: ActionFunction;
      element?: React.ReactNode | null;
      Component?: React.ComponentType | null;
      errorElement?: React.ReactNode | null;
      ErrorBoundary?: React.ComponentType | null;
      handle?: RouteObject["handle"];
      shouldRevalidate?: ShouldRevalidateFunction;
      lazy?: LazyRouteFunction<RouteObject>;
  }
  (IMPORTANTE QUE RESPETE EL NOMBRE que es caseSensitive)
  informacion: https://reactrouter.com/en/main/route/route
  (loader:es una funcion que se ejecuta antes de cargar la vista)
  (handler: es una funcion que se ejecuta una vez cargada la pagina)
  (las rutas index,layout y el outlet son conceptos importantes)
 */

var routes = [
  {
    path: "/",
    loader: () => (redirect("/home"))
  },
  {
    path: "/home",
    loader: () => ( redirect("/Dashboard")),
    element: <Home/>,
    children: [
      {
        index:true,
        path:"/home/about",
        element:<About/>
      }
    ]
  },
  {
    path: "/Dashboard/",
    element: <Dashboard />,
    children : [
      {
        path:"inventario/:item",
        element: <ItemList/>,
        errorElement:<ErrorPage/>
      },
      {
        path:"inventario/:item/create/",
        element: <CreateForm/>,
        loader: FormLoader,
        action: FormSubmitter
      },
      {
        path:"inventario/:item/read/:id",
        element: <ReadForm/>,
        loader: FormLoader,
        action: ReadItem
      },
      {
        path:"inventario/:item/update/:id",
        element: <UpdateForm/>,
        loader: FormLoader,
        action: FormSubmitter
      },
      {
        path:"inventario/:item/delete/:id",
        element: <DeleteForm/>,
        loader: FormLoader,
        action: FormSubmitter
      },
      {
        index:true,
        element: <Home/>
      }
    ]
  }
];

//console.log(routes);
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