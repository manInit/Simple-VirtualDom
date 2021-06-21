import { createElement } from '../../vdom';

const btnControl = (handlerClick, isRight = false) => createElement('button', {
  attrs: {
    class: `slider__btn slider__btn_${isRight ? 'right' : 'left'}`,
    onClick: handlerClick
  }
});

export { btnControl }