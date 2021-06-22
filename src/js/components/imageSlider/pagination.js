import { createElement } from '../../vdom';

const bulletPagination = isActive => createElement('li', {
  attrs: {
    class: `slider__bullet ${isActive ? 'slider__bullet_active' : ''}`
  }
});

const pagination = (countElements, activeIndex) => createElement('ul', {
  attrs: {
    class: 'slider__pagination'
  },
  children: [...Array(countElements).keys()].map(index => bulletPagination(index === activeIndex))
});

export { pagination }