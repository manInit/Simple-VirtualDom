import { setProp } from './toggleProp';

const renderElem = vNode => {
  const el = document.createElement(vNode.tagName);

  for (const [k, v] of Object.entries(vNode.attrs)) {
    setProp(k, v, el);
  }

  for (const child of vNode.children) {
    el.appendChild(render(child));
  }

  return el;
};

const render = vNode => {
  if (typeof vNode === 'string') return document.createTextNode(vNode);

  return renderElem(vNode);
};

export { render };