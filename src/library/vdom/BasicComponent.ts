import { VirtualElem } from './VirtualElem'

interface BasicComponent {
  state: Record<string, any>
  getVEl(): VirtualElem
}

const isBasicComponent = (x: any): x is BasicComponent => {
  return (x as BasicComponent).state !== undefined
}

export { BasicComponent, isBasicComponent }