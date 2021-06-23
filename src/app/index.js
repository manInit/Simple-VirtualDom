import { mount, render, watchEffect, diff } from '../vdom';
import { Slider } from '../components/imageSlider';
import './reset.css';

const urlImages = [
  'https://webstatic-sea.mihoyo.com/upload/event/2021/06/08/457a8eb51ff9a08294e4cd89d53f8ea8_9165375142265154823.jpg',
  'https://webstatic-sea.mihoyo.com/upload/event/2021/06/07/84ff40efc1d42323bda6a4887a2f2fd9_8179715898099820308.jpg',
  'https://webstatic-sea.mihoyo.com/upload/event/2021/06/07/1c0a4f33927fc1356fc6fdeef1b693b9_6307666152615946317.jpg',
  'https://webstatic-sea.mihoyo.com/upload/event/2021/06/07/f92a5c7a6087d27df987f570281fb713_1620003236594776086.jpg',
  'https://webstatic-sea.mihoyo.com/upload/event/2021/06/07/ed8f7007d0f94238d8e9818b64ab52fa_7052252726274558929.jpg'
];


const slider = new Slider(urlImages);

let vTree, rootNode;

watchEffect(() => {
  if (!rootNode) {
    vTree = slider.getVSliderEl();
    rootNode = mount(render(vTree), document.getElementById('root'));
  } else {
    let newVTree = slider.getVSliderEl();
    const patch = diff(vTree, newVTree);
    patch(rootNode);
    vTree = newVTree;
  }
});
