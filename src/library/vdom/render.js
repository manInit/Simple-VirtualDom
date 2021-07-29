import { setProp } from './toggleProp';
import { BasicComponent } from './basicComponent';
import { reactive } from '../reactivity';

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

  if (vNode instanceof BasicComponent) {
    const node = renderElem(vNode.getVEl());
    if (vNode.state) vNode.state = reactive(vNode.state, vNode, node);
    return node;
  }

  return renderElem(vNode);
};

export { render };