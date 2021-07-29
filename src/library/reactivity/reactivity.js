import { diff } from '../vdom';
import { Observer } from './observer';

const updateDOMOnStateChange = (component, dom) => {
  let vTree = component.getVEl();

  return () => {
    let newVTree = component.getVEl();
    const patch = diff(vTree, newVTree);
    patch(dom);
    vTree = newVTree;
  };
};

const reactive = (obj, component, dom) => {
  const dep = new Observer();
  dep.addEffect(updateDOMOnStateChange(component, dom));

  for (let [k, v] of Object.entries(obj)) {
    Object.defineProperty(obj, k, {
      get() {
        return v;
      },
      set(newValue) {
        if (v !== newValue) {
          v = newValue;
          dep.notify();
        }
      }
    });
  }
  return obj;
};

export { reactive };