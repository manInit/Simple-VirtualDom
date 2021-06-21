import { createElement } from '../../vdom';
import './style.sass';

function handlerClick() {
  console.log(1)
  console.log(2)
}

const imageSlider = () => createElement('div', {
  attrs: {
    id: 'slider',
    class: 'slider red',
    currentSlide: 0,
    onClick: handlerClick
  },
  children: [
    ''
  ]
});

export { imageSlider }