import { Route } from "react-router-dom";
import routes from "routes.js";

export default function dashboardView(routes) {
    return (
        <body>
        <div className="wrapper">
            <div className="main-panel" ref={mainPanel}>
            <Routes>
            {routes.map((route, key) => {
            return (
                <Route
                    path={route.path}
                    element={route.component}
                    icon = {route.icon === "" ? icon = route.icon: ""} 
                    key={key}
                    exact
                />
            );
            })}
            </Routes>
            </div>
        </div>
        </body>
    );
};