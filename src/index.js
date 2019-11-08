import React from 'react'
import ReactDOM from 'react-dom'
import MainApp from './Views/MainApp'
import './globalStyles.css'

// Bootstrap y Jquery
import 'bootstrap/dist/css/bootstrap.css'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import PruebasFormsHooks from './pruebasFormsHooks'

render()
// Hot Module Replacement
function render () {
  ReactDOM.render(<PruebasFormsHooks />, document.getElementById('root'))
}

if (module.hot) {
  module.hot.accept('./Views/MainApp', () => {
    render()
  })
}
