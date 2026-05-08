import './styles/main.scss'

import header from './components/header/header.html?raw'
import hero from './components/hero/hero.html?raw'

const app = document.querySelector('#app')
const main = document.querySelector('#main')

function renderHeader(html) {
  app.insertAdjacentHTML('afterbegin', html)
}

function renderMain(html) {
  main.insertAdjacentHTML('beforeend', html)
}

renderMain(hero)
renderHeader(header)
