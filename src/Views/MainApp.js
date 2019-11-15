import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Register from '../Components/RegisterBrand/Register'
import OrderDetail from './RegisterBrand/order-detail/OrderDetail'
import FinishRegister from './RegisterBrand/finish-register/FinishRegister'
import SignUp from './SignUp/SignUp'
import SignIn from './SignUp/SignIn'
import { ROUTES } from './common/constants'

const MainApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.home} component={Home} />
      <Route exact path={ROUTES.registerBrand} component={Register} />
      <Route exact path={ROUTES.orderDetail} component={OrderDetail} />
      <Route exact path={ROUTES.finishRegister} component={FinishRegister} />
      <Route exact path={ROUTES.signup} component={SignUp} />
      <Route exact path={ROUTES.signin} component={SignIn} />
    </Switch>
  </BrowserRouter>
)
export default MainApp
