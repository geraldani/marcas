import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Layout from './Layout'
import Register from './RegisterBrand/Register'
import { ROUTES } from './utilities/constants'

const MainApp = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path={ROUTES.home} component={Home} />
        <Route exact path={ROUTES.registerBrand} component={Register} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
export default MainApp
