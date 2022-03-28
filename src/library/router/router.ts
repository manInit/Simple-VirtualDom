import { mount } from '../vdom/mount'
import { BasicComponent } from '../vdom/BasicComponent'
import { VirtualElem } from '../vdom/VirtualElem'

class Router {
  static routes: Record<string, BasicComponent | VirtualElem> = null

  static setRoutes(routes: Record<string, BasicComponent | VirtualElem>): void {
    Router.routes = routes

    const onChangePath = () => Router.changePath(window.location.pathname)   
    //firstly set path
    onChangePath()
    window.onpopstate = onChangePath
  } 

  static changePath(pathName: string): void {
    const url = window.location.origin + pathName
    window.history.pushState({}, pathName, url)
    mount(Router.routes[pathName], document.body)
  }
}

export { Router }