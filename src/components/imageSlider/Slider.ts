import { BasicComponent, createElement } from '../../library/vdom/index'
import { slidesList } from './slidesList'
import { pagination } from './pagination'
import { btnControl } from './btnControl'
import { arrMove } from '../../utils/workWithArray'
import { VirtualElem } from '../../library/vdom/VirtualElem'

class Slider implements BasicComponent {
  public state = {
    classes: ['active', 'next-1', 'next-2', 'prev-2', 'prev-1']
  }
  private imageUrls: string[]
  
  constructor(imageUrls: string[]) {
    this.imageUrls = imageUrls
  }

  moveSlidesRight(): void {
    this.state.classes = arrMove(1, this.state.classes)
  }

  moveSlidesLeft(): void {
    this.state.classes = arrMove(-1, this.state.classes)
  }

  getVEl(): VirtualElem {
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
    })
  }
}

export { Slider }