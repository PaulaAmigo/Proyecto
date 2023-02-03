//importamos las vistas
import { login } from "../pages/login.js";
import { index } from "../pages/index.js";

//creamos una variable objetos y se colocaron las rutas, que importamos en main.js
export const routes = {
  "/": login(),
  "/index": index(),
};
