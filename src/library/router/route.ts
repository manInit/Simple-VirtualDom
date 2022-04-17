import { createElement, VirtualElem } from '../vdom/index'
import { Router } from './Router'

const route = (title: string, url: string, classes?: string): VirtualElem => createElement('a', {
  attrs: {
    class: classes,
    href: url,
    onClick: e => {
      e.preventDefault()
      Router.changePath(url)
    }
  },
  children: [title]
})

export { route }