import React from 'react'
import ReactDOM from 'react-dom'
import MainApp from './Components/MainApp'
import './globalStyles.css'

// Bootstrap y Jquery
import 'bootstrap/dist/css/bootstrap.css'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

render()
// Hot Module Replacement
function render () {
  ReactDOM.render(<MainApp />, document.getElementById('root'))
}

if (module.hot) {
  module.hot.accept('./Components/MainApp', () => {
    render()
  })
}
