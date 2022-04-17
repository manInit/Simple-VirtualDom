import './globalStyles/reset.css'

import { TestComponent } from './components/test/index'
import { MainComponent } from './components/main/index'
import { CounterComponent } from './components/counter/index'

import { Router } from './library/router/index'

Router.setRoutes({
  '/': new MainComponent(),
  '/slider': new TestComponent(),
  '/counter': new CounterComponent()
})

// mount(new MainComponent(), document.getElementById('root'))