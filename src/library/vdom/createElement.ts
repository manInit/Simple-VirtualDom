import { BasicComponent } from './BasicComponent'
import { VirtualElem } from './VirtualElem'

interface ExtraArguments {
  attrs: Record<string, string | EventListenerOrEventListenerObject>, 
  children: Array<VirtualElem | BasicComponent | string>
}

const createElement = (tagName: string, extra: ExtraArguments = { attrs: {}, children: [] }) => {
  const vElem = Object.create(null)
  
  Object.assign(vElem, {
    tagName,
    attrs: extra.attrs,
    children: extra.children
  })

  return vElem
}

export { createElement }