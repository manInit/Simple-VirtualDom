import { mount } from "../vdom";

class Router {
  static routes = null;

  static setRoutes(routes) {
    Router.routes = routes;


    const onChangePath = () => Router.changePath(window.location.pathname);   
    //firstly set path
    onChangePath();
    window.onpopstate = onChangePath;
  } 

  static changePath(pathName) {
    const url = window.location.origin + pathName;
    window.history.pushState({}, pathName, url);
    mount(Router.routes[pathName], document.body);
  }
}



export { Router };