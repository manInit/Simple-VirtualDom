import { createElement, VirtualElem } from '../../library/vdom/index'

const btnControl = (
  handlerClick: EventListenerOrEventListenerObject, 
  isRight = false): VirtualElem => createElement('button', {
    attrs: {
      class: `slider__btn slider__btn_${isRight ? 'right' : 'left'}`,
      onClick: handlerClick,
    },
    children: []
});

export { btnControl }