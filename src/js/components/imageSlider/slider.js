import { createElement } from '../../vdom';
import { slidesList } from './slidesList';
import { pagination } from './pagination';
import { btnControl } from './btnControl'
import { arrMove } from '../../utils';

class Slider {
  classes = ['active', 'next-1', 'next-2', 'prev-2', 'prev-1'];
  
  constructor(imageUrls) {
    this.imageUrls = imageUrls;
  }

  getNumberActiveSlide() {
    return this.classes.findIndex(elem => elem === 'active');
  }

  moveSlidesRight() {
    this.classes = arrMove(1, this.classes);
  }

  moveSlidesLeft() {
    this.classes = arrMove(-1, this.classes);
  }

  getVSliderEl() {
    return createElement('div', {
      attrs: {
        class: 'slider',
      },
      children: [
        slidesList(this.imageUrls, this.classes),
        pagination(this.imageUrls.length, this.getNumberActiveSlide()),
        btnControl(this.moveSlidesRight.bind(this), true),
        btnControl(this.moveSlidesLeft.bind(this), false),
      ]
    });
  }

}

export { Slider }