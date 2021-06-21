import { createElement } from '../../vdom';
import { slidesList } from './slidesList';

const btnControl = (handlerClick, isRight = false) => createElement('button', {
  attrs: {
    class: `slider__btn slider__btn_${isRight ? 'right' : 'left'}`,
    onClick: handlerClick
  }
})

const slider = imageUrls => createElement('div', {
  attrs: {
    id: 'slider',
    class: 'slider',
    currentSlide: 0,
  },
  children: [
    slidesList(imageUrls),
    btnControl(() => console.log('right'), true),
    btnControl(() => console.log('left'), false),
  ]
});

export { slider }