import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Layout from './Layout'

const MainApp = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
export default MainApp
