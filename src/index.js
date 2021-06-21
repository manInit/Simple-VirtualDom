import { mount, render } from './js/vdom';
import { root } from './js/components/root';
import { imageSlider } from './js/components/imageSlider';

const VSlider = imageSlider();
const vRootElem = root([VSlider]);

const app = render(vRootElem);
mount(app, document.getElementById('root'));

// const app = render(vApp);
// let newRoot = mount(app, document.getElementById('root'));

// setInterval(() => {
//   count++;
//   const vNewApp = createApp(count);
//   const patch = diff(vApp, vNewApp);
//   newRoot = patch(newRoot);
//   vApp = vNewApp;
// }, 1000);