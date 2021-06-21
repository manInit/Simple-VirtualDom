import { createElement } from "../vdom";

const root = children => createElement('div', {
  attrs: {
    id: 'app',
  },
  children
});

export { root }