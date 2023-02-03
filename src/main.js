//importar las rutas en donde están las vistas con su html
import { routes } from "./routers/router.js";

//variable de root, que esta en html
const rootDiv = document.getElementById("root");

console.log(routes);

//
rootDiv.appendChild(routes[window.location.pathname]);
//const container = document.createElement("div");

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.replaceChildren(routes[pathname]);
};
