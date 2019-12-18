import React from 'react'
import ReactDOM from 'react-dom'
import MainApp from './Components/MainApp'
import { GlobalStyles } from './Views/styles/GlobalStyles'
import './Views/styles/globalStyles.css'
// Bootstrap y Jquery
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const StyledMainApp = () => <><GlobalStyles /><MainApp /></>
render()

// Hot Module Replacement
function render () {
  ReactDOM.render(
    <StyledMainApp />,
    document.getElementById('root'))
}

if (module.hot) {
  module.hot.accept('./Components/MainApp', () => {
    render()
  })
}
