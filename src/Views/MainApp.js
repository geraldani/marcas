import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Register from '../Components/RegisterBrand/Register'
import FinishRegister from './RegisterBrand/finish-register/FinishRegister'
import Sign from './SignUp/Sign'
import { ROUTES } from './common/constants'
import MoreInfo from './Home/moreInfo/moreInfo'
import Faqs from './Faq/Faqs'
import TermsConditions from './Faq/TermsConditions'
import SaveOrder from '../Components/RegisterBrand/SaveOrder'

const MainApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.home} component={Home} />
      <Route exact path={ROUTES.registerBrand} component={Register} />
      <Route exact path={ROUTES.orderDetail} component={SaveOrder} />
      <Route exact path={ROUTES.finishRegister} component={FinishRegister} />
      <Route exact path={ROUTES.moreInfo} component={MoreInfo} />
      <Route exact path={ROUTES.terms} component={TermsConditions} />
      <Route exact path={ROUTES.faq} component={Faqs} />
      <Route exact path={ROUTES.login} component={Sign} />
    </Switch>
  </BrowserRouter>
)
export default MainApp
