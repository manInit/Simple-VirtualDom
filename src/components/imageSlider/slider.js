import { createElement } from '../../library/vdom';
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
  }

  moveSlidesRight() {
    this.state.classes = arrMove(1, this.state.classes);
  }

  moveSlidesLeft() {
    this.state.classes = arrMove(-1, this.state.classes);
  }

  getVEl() {
    return createElement('div', {
      attrs: {
        class: 'slider',
      },
      children: [
        slidesList(this.imageUrls, this.state.classes),
        pagination(this.imageUrls.length, this.state),
        btnControl(this.moveSlidesRight.bind(this), true),
        btnControl(this.moveSlidesLeft.bind(this), false),
      ]
    });
  }

}

export { Slider };