import { createElement } from '../../library/vdom/index'
import { VirtualElem } from '../../library/vdom/VirtualElem';

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