import { createElement } from '../../library/vdom';

const slideImage = src => createElement('img', {
  attrs: {
    class: 'slider__image',
    src
  }
});

const slide = (srcImage, positionClass) => createElement('li', {
  attrs: {
    class: `slider__slide slider__slide_${positionClass}`
  },
  children: [
    slideImage(srcImage)
  ]
});

export { slide };