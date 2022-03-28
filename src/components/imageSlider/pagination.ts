import { createElement } from '../../library/vdom/index'
import { VirtualElem } from '../../library/vdom/VirtualElem'
import { arrMove } from '../../utils/index'

const bulletPagination = (
  isActive: boolean, 
  clickHandler: EventListenerOrEventListenerObject): VirtualElem => createElement('li', {
    attrs: {
      class: `slider__bullet ${isActive ? 'slider__bullet_active' : ''}`,
      onClick: clickHandler,
    },
    children: []
})

const pagination = (countElements: number, state: { classes: string[] }) => {
  const activeIndex = state.classes.findIndex(elem => elem === 'active')

  const children = [...Array(countElements).keys()].map(index => bulletPagination(index === activeIndex, () => {
    const activeIndex = state.classes.findIndex(elem => elem === 'active')
    state.classes = arrMove(index - activeIndex, state.classes)
  }))

  return createElement('ul', {
    attrs: {
      class: 'slider__pagination'
    },
    children
  })
}

export { pagination }