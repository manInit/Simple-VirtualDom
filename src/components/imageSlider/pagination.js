import { createElement } from '../../library/vdom';
import { arrMove } from '../../utils';

const bulletPagination = (isActive, clickHandler) => createElement('li', {
  attrs: {
    class: `slider__bullet ${isActive ? 'slider__bullet_active' : ''}`,
    onClick: clickHandler,
  }
});

const pagination = (countElements, state) => {
  const activeIndex = state.classes.findIndex(elem => elem === 'active');

  const children = [...Array(countElements).keys()].map(index => bulletPagination(index === activeIndex, () => {
    const activeIndex = state.classes.findIndex(elem => elem === 'active');
    state.classes = arrMove(index - activeIndex, state.classes);
    console.log(state.classes);
  }));

  return createElement('ul', {
    attrs: {
      class: 'slider__pagination'
    },
    children
  });
};

export { pagination };