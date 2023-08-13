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
import TipoInsumoTable from "views/Tables.js";

var routes = [
  {
    path: "/tables",
    name: "Inventario",
    icon: "nc-icon nc-tile-56",
    component: <TipoInsumoTable />,
    layout: "/admin",
  }
];
export default routes;