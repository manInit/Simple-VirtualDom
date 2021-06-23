import { createElement } from '../../vdom';
import { slide } from './slide';

const slidesList = (urls, classes) => createElement('ul', {
  attrs: {
    class: 'slider__list'
  },
  children: urls.map((url, index) => slide(url, classes[index]))
});

export { slidesList };