import { mount, render, reactive, watchEffect } from './js/vdom';
import { Slider } from './js/components/imageSlider';
import './js/components/reset.css';

const urlImages = [
  'https://webstatic-sea.mihoyo.com/upload/event/2021/06/08/457a8eb51ff9a08294e4cd89d53f8ea8_9165375142265154823.jpg',
  'https://webstatic-sea.mihoyo.com/upload/event/2021/06/07/84ff40efc1d42323bda6a4887a2f2fd9_8179715898099820308.jpg',
  'https://webstatic-sea.mihoyo.com/upload/event/2021/06/07/1c0a4f33927fc1356fc6fdeef1b693b9_6307666152615946317.jpg',
  'https://webstatic-sea.mihoyo.com/upload/event/2021/06/07/f92a5c7a6087d27df987f570281fb713_1620003236594776086.jpg',
  'https://webstatic-sea.mihoyo.com/upload/event/2021/06/07/ed8f7007d0f94238d8e9818b64ab52fa_7052252726274558929.jpg'
];

let state = {
  a: 1,
  b: 2
};

state = reactive(state);
watchEffect(() => console.log('a' + state.a));
watchEffect(() => console.log('b' + state.b));

setInterval(() => {
  state.a++;
}, 1000);


const slider = new Slider(urlImages);
// let vRootElem = root([slider.getVSliderEl()]);
// let app = render(vRootElem);
mount(render(slider.getVSliderEl()), document.getElementById('root'));

// setInterval(() => {
//   slider.moveSlidesLeft();
//   const newVRootElem = root([slider.getVSliderEl()]);
//   const patch = diff(vRootElem, newVRootElem);
//   newRoot = patch(newRoot);
//   vRootElem = newVRootElem
// }, 1000)
