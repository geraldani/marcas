import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Register from '../Components/RegisterBrand/Register'
import OrderDetail from './RegisterBrand/order-detail/OrderDetail'
import FinishRegister from './RegisterBrand/finish-register/FinishRegister'
import Sign from './SignUp/Sign'
import { ROUTES } from './common/constants'
import MoreInfo from './Home/moreInfo/moreInfo'

const MainApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.home} component={Home} />
      <Route exact path={ROUTES.registerBrand} component={Register} />
      <Route exact path={ROUTES.orderDetail} component={OrderDetail} />
      <Route exact path={ROUTES.finishRegister} component={FinishRegister} />
      <Route exact path={ROUTES.login} component={Sign} />
      <Route exact path={ROUTES.moreInfo} component={MoreInfo} />
    </Switch>
  </BrowserRouter>
)
export default MainApp
