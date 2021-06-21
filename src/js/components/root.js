import { createElement } from "../vdom";
import 'modern-normalize.css';

const root = children => createElement('div', {
  attrs: {
    id: 'app',
  },
  children
});

export { root }