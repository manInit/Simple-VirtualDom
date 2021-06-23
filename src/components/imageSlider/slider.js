import { createElement, reactive, watchEffect, render, diff } from '../../vdom';
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
    let vTree, rootNode;
    watchEffect(() => {
      if (!rootNode) {
        vTree = this.getVSliderEl();
        rootNode = render(vTree);
      } else {
        let newVTree = this.getVSliderEl();
        const patch = diff(vTree, newVTree);
        patch(rootNode);
        vTree = newVTree;
      }
    });
    return rootNode;
  }

  getNumberActiveSlide() {
    return this.state.classes.findIndex(elem => elem === 'active');
  }

  moveSlidesRight() {
    this.state.classes = arrMove(1, this.state.classes);
  }

  moveSlidesLeft() {
    this.state.classes = arrMove(-1, this.state.classes);
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