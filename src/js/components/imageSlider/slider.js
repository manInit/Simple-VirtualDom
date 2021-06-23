import { createElement, reactive, watchEffect } from '../../vdom';
import { slidesList } from './slidesList';
import { pagination } from './pagination';
import { btnControl } from './btnControl';
import { arrMove } from '../../utils';

class Slider {
  state = {
    classes: ['active', 'next-1', 'next-2', 'prev-2', 'prev-1']
  };
  
  constructor(imageUrls) {
    this.imageUrls = imageUrls;
    this.state = reactive(this.state);
  }

  getNumberActiveSlide() {
    return this.state.classes.findIndex(elem => elem === 'active');
  }

  moveSlidesRight() {
    this.state.classes = arrMove(1, this.classes);
    console.log(this.state.classes);
  }

  moveSlidesLeft() {
    this.state.classes = arrMove(-1, this.classes);
    console.log(this.state.classes);
  }

  getVSliderEl() {
    return createElement('div', {
      attrs: {
        class: 'slider',
      },
      children: [
        slidesList(this.imageUrls, this.state.classes),
        pagination(this.imageUrls.length, this.getNumberActiveSlide()),
        btnControl(this.moveSlidesRight.bind(this), true),
        btnControl(this.moveSlidesLeft.bind(this), false),
      ]
    });
  }

}

export { Slider };