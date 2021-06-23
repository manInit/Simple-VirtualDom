const isEventProp = prop => prop.startsWith('on');
const getEventName = propEventName => propEventName.slice(2).toLowerCase();

const setProp = (propName, propValue, node) => {
  if (isEventProp(propName)) node.addEventListener(getEventName(propName), propValue);
  else node.setAttribute(propName, propValue);
};

const removeProp = (propName, propValue, node) => {
  if (isEventProp(propName)) node.removeEventListener(getEventName(propName), propValue);
  else node.removeAttribute(propName);
};

export { setProp, removeProp };