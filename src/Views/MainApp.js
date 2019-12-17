import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home/Home'
import Register from '../Components/RegisterBrand/Register'
import FinishRegister from './RegisterBrand/finish-register/FinishRegister'
import MoreInfo from './Home/moreInfo/moreInfo'
import Faqs from './Faq/Faqs'
import TermsConditions from './Faq/TermsConditions'
import SaveOrder from '../Components/RegisterBrand/SaveOrder'
import ConstructionPage from './common/Warnings/constructioPage'
import PageNotFound from './common/Warnings/PageNotFound'
import { LocalStorage, ROUTES } from '../utils/constants'
import DashBoard from './Dashboard/DashBoard'
import SearchBrand from './Dashboard/searchBrand/SearchBrand'
import RegisterUserComponent from '../Components/RegisterUser/RegisterUserComponent'
import RegisterUserWithBrand from '../Components/RegisterUser/RegisterUserWithBrand'
import LoginComponent from '../Components/LoginUser/LoginComponent'
import { history } from '../redux/store'
import Detail from './Dashboard/seeDetail/Detail'

// si privateOnRule es true, significa que la ruta es privada cuando alguien esta logeado o cuando la regla se cumple, caso contrario, la ruta es privada cuando no se esta logueado o no se cumple la regla
const PrivateRoute = ({ component: Component, linkRedirected, privateOnRule, rule, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const currentUser = window.localStorage.getItem(rule)
      if (privateOnRule) {
        if (currentUser) {
          return <Redirect to={{ pathname: linkRedirected, state: { from: props.location } }} />
        }
      } else {
        if (!currentUser) {
          return <Redirect to={{ pathname: linkRedirected, state: { from: props.location } }} />
        }
      }
      return <Component {...props} />
    }}
  />
)

const MainApp = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={ROUTES.home} component={Home} />
      <PrivateRoute
        exact path={ROUTES.login}
        component={LoginComponent}
        linkRedirected={ROUTES.dashboard}
        privateOnRule
        rule={LocalStorage.user}
      />
      <PrivateRoute
        exact path={ROUTES.register}
        component={RegisterUserComponent}
        linkRedirected={ROUTES.dashboard}
        privateOnRule rule={LocalStorage.user}
      />
      <PrivateRoute
        exact path={ROUTES.dashboard}
        component={DashBoard}
        linkRedirected={ROUTES.login}
        rule={LocalStorage.user}
      />

      <PrivateRoute
        exact path={ROUTES.finishRegister}
        component={RegisterUserWithBrand}
        linkRedirected={ROUTES.home}
        rule={LocalStorage.registerBrand}
      />
      <Route exact path={ROUTES.registerBrand} component={Register}/>
      <Route exact path={ROUTES.orderDetail} component={SaveOrder}/>
      <Route exact path={ROUTES.searchBrand} component={SearchBrand}/>
      <Route exact path={ROUTES.moreInfo + '/:name'} component={MoreInfo}/>
      <Route exact path={ROUTES.terms} component={TermsConditions}/>
      <Route exact path={ROUTES.faq} component={Faqs}/>
      <Route exact path={ROUTES.beginBrand + '/:name'} component={ConstructionPage}/>
      <Route exact component={PageNotFound}/>
      <Route exact path={ROUTES.seeRegister + '/:id'} component={Detail}  />
    </Switch>
  </Router>
)
export default MainApp
