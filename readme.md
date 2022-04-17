# Virtual Dom Realisation

## Features

We can create two type Virtual dom elements, with state and without state. <br />
And use client side routing

### Virtual elem
Virtual elements which dont have state.
```ts 
import { createElement, VirtualElem } from '../../library/vdom/index'

const btnControl = (
  handlerClick: EventListenerOrEventListenerObject, 
  isRight = false): VirtualElem => createElement('button', {
    attrs: {
      class: `slider__btn slider__btn_${isRight ? 'right' : 'left'}`,
      onClick: handlerClick,
    },
    children: []
});
```

### Component with state
Anb Components which have state and automatically rerender when state updated.<br />
Bloew you can see example counter component
```ts 
import { BasicComponent, VirtualElem, createElement } from '../../library/vdom/index'

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
        this.state.value.toString(),
        createElement('button', {
          attrs: {
            onClick: () => this.increment()
          },
          children: ['++']
        }),
      ],
      attrs: {
        class: 'counter'
      }
    })
  }
}
```
### Routing
We can use client side routing.
```ts
import { Router } from './library/router/index'

Router.setRoutes({
  '/': new MainComponent(),
  '/slider': new TestComponent(),
  '/counter': new CounterComponent()
})
```
But server should send your root html and js on every non-api query.<br />
Simple example on .htaccess file
```
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [NC,L,QSA]
```

### Examples 
For example i realisation two components on two separe routes.<br />
It's slider from Genshin Impact site, and simple counter<br />
You can try it here -> https://vdom.maninit.ru/  <br />
And you can check code in this repository in components folder

