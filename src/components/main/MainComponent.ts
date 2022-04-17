import { BasicComponent, VirtualElem, createElement } from '../../library/vdom/index'
import { route } from '../../library/router/index'

class MainComponent implements BasicComponent { 
  public state = {}

  getVEl(): VirtualElem {
    return createElement('nav', {
      children: [ 
        route('Слайдер', '/slider', 'link'),
        route('Счетчик', '/counter', 'link')
      ],
      attrs: {}
    })
  }
}

export { MainComponent }