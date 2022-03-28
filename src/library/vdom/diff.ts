import { render } from './render'
import { setProp, removeProp, isEventProp } from './toggleProp'
import { BasicComponent, isBasicComponent } from './BasicComponent'
import { VirtualElem } from './VirtualElem'
import { Attributes } from '../types/index'

const diffAttrs = (oldAttrs: Attributes, newAttrs: Attributes) => {
  const patches: Array<(node: HTMLElement) => HTMLElement> = []

  //removing all listeners prop
  for (const [k, v] of Object.entries(oldAttrs)) {
    if (!isEventProp(k)) continue

    patches.push((node: HTMLElement): HTMLElement => {
      removeProp(k, node, v as EventListenerOrEventListenerObject)
      return node
    })
  }

  //set all new attributes
  for (const [k, v] of Object.entries(newAttrs)) {
    patches.push(node => {
      setProp(k, v, node)
      return node
    })
  }
  
  //delete all dissapear attributes
  for (const [k, v] of Object.entries(oldAttrs)) {
    if (Object.keys(newAttrs).includes(k)) continue

    patches.push(node => {
      removeProp(k, node, v as EventListenerOrEventListenerObject)
      return node
    })
  }

  return (node: HTMLElement): HTMLElement => {
    for (const patch of patches) 
      patch(node)

    return node
  }
}

const diffChildren = (oldChildren: Array<VirtualElem | BasicComponent>, newChildren: Array<VirtualElem | BasicComponent>) => {
  const childPatches: Array<(node: HTMLElement) => HTMLElement | void> = []

  for (const [index, child] of oldChildren.entries()) 
    childPatches.push(diff(child, newChildren[index]))

  const additionalPatches: Array<(node: HTMLElement) => HTMLElement | void> = []
  for (const additionalChild of newChildren.slice(oldChildren.length)) {
    additionalPatches.push(node => {
      node.appendChild(render(additionalChild))
      return node
    })
  } 

  return (parent: HTMLElement): HTMLElement => {
    parent.childNodes.forEach((child, i) => {
      childPatches[i](child as HTMLElement)
    })

    for (const patch of additionalPatches) 
      patch(parent)
    
    return parent
  }
}

const diff = (oldVTree: BasicComponent | VirtualElem, newVTree?: BasicComponent | VirtualElem) => {
  if (isBasicComponent(oldVTree)) oldVTree = oldVTree.getVEl()
  if (isBasicComponent(newVTree)) newVTree = newVTree.getVEl()

  if (newVTree === undefined) {
    return (node: HTMLElement): void => {
      node.remove()
    }
  }

  if (typeof newVTree === 'string' || typeof oldVTree === 'string') {
    if (newVTree !== oldVTree) {
      return (node: HTMLElement): HTMLElement | Text => {
        const newNode = render(newVTree)
        node.replaceWith(newNode)
        return newNode
      }
    } else {
      return (node: HTMLElement): HTMLElement => node
    }
  }

  if (oldVTree.tagName !== newVTree.tagName) {
    return (node: HTMLElement): HTMLElement | Text => {
      const newNode = render(newVTree)
      node.replaceWith(newNode)
      return newNode
    }
  }

  const patchAttrs = diffAttrs(oldVTree.attrs, newVTree.attrs)
  const patchChildren = diffChildren(oldVTree.children, newVTree.children)

  return (node: HTMLElement): HTMLElement => {
    patchAttrs(node)
    patchChildren(node)
    return node
  }
}

export { diff }