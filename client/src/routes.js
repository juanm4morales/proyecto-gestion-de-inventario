/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import InventarioForm from "views/InventarioForm";
import InventarioList from "views/InventarioPage.js";

var routes = [
  {
    path: "/Inventario",
    name: "Inventario",
    icon: "nc-icon nc-tile-56",
    component: <InventarioList />,
    layout: "/admin",
    form:{
      path: "/InventarioForm",
      component: <InventarioForm />,
      layout: "/admin",
    },
  }
];

export default routes;