import { createElement } from '../../vdom';


const slideImage = src => createElement('img', {
  attrs: {
    class: 'slider__image',
    src
  }
})

const slide = srcImage => createElement('li', {
  attrs: {
    class: 'slider__slide'
  },
  children: [
    slideImage(srcImage)
  ]
});

export { slide }