import React from 'react'
import ReactDOM from 'react-dom'
import MainApp from './Views/MainApp'
import { GlobalStyles } from './Views/styles/GlobalStyles'
import './Views/styles/globalStyles.css'
import Store from './redux/store'
// Bootstrap y Jquery
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Provider } from 'react-redux'

const StyledMainApp = () => <><GlobalStyles /><MainApp /></>
render()

// Hot Module Replacement
function render () {
  ReactDOM.render(
    <Provider store={Store}>
      <StyledMainApp />
    </Provider>,
    document.getElementById('root'))
}

if (module.hot) {
  module.hot.accept('./Views/MainApp', () => {
    render()
  })
}
