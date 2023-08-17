import { createBrowserRouter,redirect } from "react-router-dom";
import Home from "./pages/Home"
import Inventario from "./pages/Inventario";
import Detail from "./pages/Detail"
const router = createBrowserRouter([
    {
      path: "/",
      loader: async () => (
        redirect("/Dashboard")
      ),
    },
    {
      path: "/Dashboard",
      element: <Home />
    },
    {
      path: "/inventario/:itemName",
      element: <Inventario/>
    },
    {
      path: "/inventario/:itemName/detail/:itemId/:act",
      element: <Detail/>
    },
  ]);

export default router;