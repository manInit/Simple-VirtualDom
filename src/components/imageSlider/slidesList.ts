import { createElement } from '../../library/vdom/index'
import { VirtualElem } from '../../library/vdom/VirtualElem'
import { slide } from './slide'

const slidesList = (urls: string[], classes: string[]): VirtualElem => createElement('ul', {
  attrs: {
    class: 'slider__list'
  },
  children: urls.map((url, index) => slide(url, classes[index]))
})

export { slidesList }