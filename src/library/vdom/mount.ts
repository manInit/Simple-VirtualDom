import { BasicComponent } from './BasicComponent'
import { render } from './render'
import { VirtualElem } from './VirtualElem'

const mount = (vNode: BasicComponent | VirtualElem, target: HTMLElement) => {
  const node = render(vNode)

  target.innerHTML = ''
  target.appendChild(node)
}

export { mount }