import { BasicComponent, VirtualElem, createElement } from '../../library/vdom/index'
import { btnIncrement } from './btnIncrement'

class CounterComponent implements BasicComponent { 
  public state = { value: 0 }

  constructor(startValue = 0) {
    this.state.value = startValue
  }

  increment() {
    this.state.value++
  }

  getVEl(): VirtualElem {
    return createElement('div', {
      children: [
        createElement('div', {
          attrs: {
            class: 'counter__value'
          },
          children: [this.state.value.toString()]
        }),
        btnIncrement(this.increment.bind(this)),
      ],
      attrs: {
        class: 'counter'
      }
    })
  }
}

export { CounterComponent }