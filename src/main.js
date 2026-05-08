import './styles/main.scss'

import header from './components/header/header.html?raw'
import hero from './components/hero/hero.html?raw'
import ticker from './components/ticker/ticker.html?raw'

import './js/ticker.js'

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
renderHeader(header)
