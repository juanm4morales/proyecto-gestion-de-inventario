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
      path: "/inventario/TipoInsumo",
      element: <Inventario/>
    }
  ]);

export default router;