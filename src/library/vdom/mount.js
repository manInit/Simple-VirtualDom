import { render } from './render';
import { reactive } from '../reactivity';

const mount = (component, target) => {
  const node = render(component.getVEl());

  if (component.state) {
    component.state = reactive(component.state, component, node);
  }

  target.innerHTML = '';
  target.appendChild(node);
};

export { mount };