import { setProp } from './toggleProp'
import { BasicComponent, isBasicComponent } from './BasicComponent'
import { reactive } from '../reactivity/index'
import { VirtualElem } from './VirtualElem'

const renderElem = (vElem: VirtualElem): HTMLElement => {
  const el: HTMLElement = document.createElement(vElem.tagName)

  for (const [k, v] of Object.entries(vElem.attrs)) 
    setProp(k, v, el)
  
  for (const child of vElem.children) 
    el.appendChild(render(child))
  
  return el
}

const render = (vElem: string | VirtualElem | BasicComponent): Text | HTMLElement => {
  if (typeof vElem === 'string') return document.createTextNode(vElem)

  if (isBasicComponent(vElem)) {
    const node = renderElem(vElem.getVEl())
    if (vElem.state) vElem.state = reactive(vElem.state, vElem, node)
    return node
  }

  return renderElem(vElem)
}

export { render }