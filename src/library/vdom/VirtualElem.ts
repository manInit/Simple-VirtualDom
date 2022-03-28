import { Attributes } from '../types/index'
import { BasicComponent } from './BasicComponent'

interface VirtualElem {
  tagName: string
  attrs: Attributes
  children: Array<VirtualElem | BasicComponent>
}

export { VirtualElem }