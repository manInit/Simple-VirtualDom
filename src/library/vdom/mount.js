import { render } from './render';

const mount = (vNode, target) => {
  const node = render(vNode);

  target.innerHTML = '';
  target.appendChild(node);
};

export { mount };