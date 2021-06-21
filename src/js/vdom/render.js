const isEventProp = prop => prop.startsWith('on');
const getEventName = propEventName => propEventName.slice(2).toLowerCase();

const setProp = (propName, propValue, node) => {
  if (isEventProp(propName)) node.addEventListener(getEventName(propName), propValue);
  else node.setAttribute(propName, propValue);
} 

const renderElem = vNode => {
  const el = document.createElement(vNode.tagName);

  for (const [k, v] of Object.entries(vNode.attrs)) {
    setProp(k, v, el);
  }

  for (const child of vNode.children) {
    el.appendChild(render(child));
  }

  return el;
}

const render = vNode => {
  if (typeof vNode === 'string') return document.createTextNode(vNode);

  return renderElem(vNode);
}

export { render };