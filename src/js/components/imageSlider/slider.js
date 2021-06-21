import { createElement } from '../../vdom';
import { slidesList } from './slidesList';
import { pagination } from './pagination';
import { btnControl } from './btnControl'
import { arrMove } from '../../utils';

const classes = [
  'active',
  'next-1',
  'next-2',
  'prev-2',
  'prev-1'
];

function moveSlidesRight(classes) {
  const newClasses = arrMove(1, classes);
  console.log(newClasses);
}

function moveSlidesLeft(classes) {
  const newClasses = arrMove(-1, classes);
  console.log(newClasses);
}
moveSlidesRight(classes)
moveSlidesLeft(classes) 
const slider = imageUrls => createElement('div', {
  attrs: {
    id: 'slider',
    class: 'slider',
    currentSlide: 0,
  },
  children: [
    slidesList(imageUrls, classes),
    pagination(imageUrls.length),
    btnControl(() => console.log('right'), true),
    btnControl(() => console.log('left'), false),
  ]
});

export { slider }