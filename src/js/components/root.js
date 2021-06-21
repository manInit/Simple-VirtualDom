import { createElement } from "../vdom";
import './reset.css';

const root = children => createElement('div', {
  attrs: {
    id: 'app',
  },
  children
});

export { root }