import { createElement } from '../../vdom';

const bulletPagination = () => createElement('li', {
  attrs: {
    class: 'slider__bullet'
  }
})

const pagination = (countElements) => createElement('ul', {
  attrs: {
    class: 'slider__pagination'
  },
  children: [...Array(countElements).keys()].map(() => bulletPagination())
});

export { pagination }