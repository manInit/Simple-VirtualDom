import { mount, render } from './js/vdom';
import { root } from './js/components/root';
import { slider } from './js/components/imageSlider';

const urlImages = [
  'https://webstatic-sea.mihoyo.com/upload/event/2021/06/08/457a8eb51ff9a08294e4cd89d53f8ea8_9165375142265154823.jpg',
  'https://webstatic-sea.mihoyo.com/upload/event/2021/06/07/84ff40efc1d42323bda6a4887a2f2fd9_8179715898099820308.jpg',
  'https://webstatic-sea.mihoyo.com/upload/event/2021/06/07/1c0a4f33927fc1356fc6fdeef1b693b9_6307666152615946317.jpg',
  'https://webstatic-sea.mihoyo.com/upload/event/2021/06/07/f92a5c7a6087d27df987f570281fb713_1620003236594776086.jpg',
  'https://webstatic-sea.mihoyo.com/upload/event/2021/06/07/ed8f7007d0f94238d8e9818b64ab52fa_7052252726274558929.jpg'
]

const VSlider = slider(urlImages);
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