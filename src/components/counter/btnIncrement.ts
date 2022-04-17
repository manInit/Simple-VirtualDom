import { createElement, VirtualElem } from '../../library/vdom/index'

const btnIncrement = (handlerClick: EventListenerOrEventListenerObject): VirtualElem => createElement('button', {
  attrs: {
    class: 'counter__btn',
    onClick: handlerClick,
  },
  children: ['++']
})

export { btnIncrement }