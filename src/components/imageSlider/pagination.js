import { createElement } from '../../library/vdom';
import { arrMove } from '../../utils';

const bulletPagination = (isActive, clickHandler) => createElement('li', {
  attrs: {
    class: `slider__bullet ${isActive ? 'slider__bullet_active' : ''}`,
    onClick: clickHandler,
  }
});

const pagination = (countElements, activeIndex, state) => createElement('ul', {
  attrs: {
    class: 'slider__pagination'
  },
  children: [...Array(countElements).keys()].map(index => bulletPagination(index === activeIndex, () => {
    state.classes = arrMove(index - activeIndex, state.classes);
  }))
});

export { pagination };