import React from 'react'
import ReactDOM from 'react-dom'
import MainApp from './Views/MainApp'
import { GlobalStyles } from './Views/GlobalStyles'
import './globalStyles.css'

// Bootstrap y Jquery
import 'bootstrap/dist/css/bootstrap.css'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import PruebasFormsHooks from './pruebasFormsHooks'

const StyledMainApp = () => <><GlobalStyles /><MainApp /></>
render()

// Hot Module Replacement
function render () {
  ReactDOM.render(<StyledMainApp />, document.getElementById('root'))
}

if (module.hot) {
  module.hot.accept('./Views/MainApp', () => {
    render()
  })
}
