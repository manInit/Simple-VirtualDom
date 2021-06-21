import { createElement } from '../../vdom';
import { slide } from './slide';

const slidesList = urls => createElement('ul', {
  attrs: {
    class: 'slider__list'
  },
  children: urls.map(url => slide(url))
});

export { slidesList }