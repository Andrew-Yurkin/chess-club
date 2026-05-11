import './styles/main.scss'

import event from './components/event/event.html?raw'
import header from './components/header/header.html?raw'
import hero from './components/hero/hero.html?raw'
import stages from './components/stages/stages.html?raw'
import ticker from './components/ticker/ticker.html?raw'

import './js/ticker.js'

import DynamicAdapt from './js/helpers.js'
import initStagesSlider from './js/stagesSlider.js'

const app = document.querySelector('#app')
const main = document.querySelector('#main')

function renderHeader(html) {
  app.insertAdjacentHTML('afterbegin', html)
}

function renderMain(html) {
  main.insertAdjacentHTML('beforeend', html)
}

renderMain(hero)
renderMain(ticker)
renderMain(event)
renderMain(stages)
renderHeader(header)

const da = new DynamicAdapt('max')
da.init()
initStagesSlider()
