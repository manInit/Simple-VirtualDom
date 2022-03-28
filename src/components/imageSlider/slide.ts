import { createElement } from '../../library/vdom/index'
import { VirtualElem } from '../../library/vdom/VirtualElem';

const slideImage = (src: string): VirtualElem => createElement('img', {
  attrs: {
    class: 'slider__image',
    src
  },
  children: []
})

const slide = (srcImage: string, positionClass: string): VirtualElem => createElement('li', {
  attrs: {
    class: `slider__slide slider__slide_${positionClass}`
  },
  children: [
    slideImage(srcImage)
  ]
})

export { slide }