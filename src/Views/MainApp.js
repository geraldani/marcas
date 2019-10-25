import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Layout from './Layout'
import Register from './RegisterBrand/Register'
import { ROUTE } from './utilities/constants'

const MainApp = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path={ROUTE.home} component={Home} />
        <Route exact path={ROUTE.registerBrand} component={Register} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
export default MainApp
