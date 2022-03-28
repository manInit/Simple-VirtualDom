import { diff } from '../vdom/index'
import { Observer } from './Observer'
import { BasicComponent } from '../vdom/BasicComponent'

const updateDOMOnStateChange = (component: BasicComponent, dom: HTMLElement) => {
  let vTree = component.getVEl()

  return (): void => {
    let newVTree = component.getVEl()
    const patch = diff(vTree, newVTree)
    patch(dom)
    vTree = newVTree
  }
}

const reactive = (obj: Record<string, any>, component: BasicComponent, dom: HTMLElement) => {
  const dep = new Observer()
  dep.addEffect(updateDOMOnStateChange(component, dom))

  for (let [k, v] of Object.entries(obj)) {
    Object.defineProperty(obj, k, {
      get() { return v },
      set(newValue) {
        if (v !== newValue) {
          v = newValue
          dep.notify()
        }
      }
    })
  }
  
  return obj
}

export { reactive }