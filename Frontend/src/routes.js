import { createBrowserRouter,redirect } from "react-router-dom";
import Home from "./pages/Home"
import { List as ListItemPage,Detail as DetailItemPage } from "./pages/ItemListPage";
import { GetItem as ItemLoader,GetItems as ItemsLoader} from "./components/itemComponent/apiService";

import { itemNames } from "./itemNames";
/* 
function getItemRoutes(itemNames){
  var routes = itemNames.map((name) => {
  return ({
      path: "/inventario/".concat(name),
      loader: <GetItems/>,
      element: <ItemPage itemName={name}/>
    })
  })
  itemNames.map((name) => (
    routes.push(
      {
        path: "/inventario/".concat(name).concat("/detail/:itemId/:act"),
        loader: <GetItem/>,
        element: <Detail itemName={name}/>
      }
    )
    ),routes)
  return routes;  
}
*/
const routes = [
  {
    path: "/",
    loader: async () => (
      redirect("/Dashboard")
    ),
  },
  {
    path: "/Dashboard",
    element: <Home />,
    Children : [
      {
        path:"/Dashboard/inventario/:item",
        loader: ItemsLoader,
        element: <ListItemPage/>
      },
      {
        path:"/Dashboard/inventario/:item/detail/:id",
        loader: ItemLoader,
        element: <DetailItemPage/>
      },
    ]
  },
]
console.log(routes)

const router = createBrowserRouter(routes);
export default router;