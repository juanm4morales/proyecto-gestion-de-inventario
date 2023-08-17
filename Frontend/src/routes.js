import { createBrowserRouter,redirect } from "react-router-dom";
import Home from "./pages/Home"
import Inventario from "./pages/Inventario";

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
      path: "/inventario/:itemName/table",
      element: <Inventario/>
    },
    {
      path: "/inventario/:itemName/details",
      element: <Inventario/>
    }
  ]);

export default router;