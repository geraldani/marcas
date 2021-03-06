import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../Views/Home/Home'
import Register from './RegisterBrand/Register'
import MoreInfo from '../Views/Home/moreInfo/moreInfo'
import Faqs from '../Views/Faq/Faqs'
import TermsConditions from '../Views/Faq/TermsConditions'
import SaveOrder from './RegisterBrand/SaveOrder'
import ConstructionPage from '../Views/common/Warnings/constructioPage'
import PageNotFound from '../Views/common/Warnings/PageNotFound'
import DashBoard from '../Views/Dashboard/DashBoard'
import RegisterUserComponent from './RegisterUser/RegisterUserComponent'
import RegisterUserWithBrand from './RegisterUser/RegisterUserWithBrand'
import LoginComponent from './LoginUser/LoginComponent'
import { LocalStorage, ROUTES } from '../utils/constants'
import { history } from '../helpers/history'
import Header from '../Views/common/header/Header'
import { findActualRouteToShowHeader } from '../utils/utils'
import { isLogged } from '../services/Login'

// si privateOnRule es true, significa que la ruta es privada cuando alguien esta logeado o cuando la regla se cumple, caso contrario, la ruta es privada cuando no se esta logueado o no se cumple la regla
const PrivateRoute = ({ component: Component, linkRedirected, privateOnRule, rule, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      /* window.localStorage.removeItem(LocalStorage.token)
       window.localStorage.removeItem(LocalStorage.user)
       window.localStorage.removeItem(LocalStorage.paperworks) */
      const currentUser = window.localStorage.getItem(rule)
      if (privateOnRule) {
        if (currentUser) {
          return <Redirect to={{ pathname: linkRedirected, state: { from: props.location } }}/>
        }
      } else {
        if (!currentUser) {
          return <Redirect to={{ pathname: linkRedirected, state: { from: props.location } }}/>
        }
      }
      return <Component {...props} />
    }}
  />
)

const MainApp = () => {
  const findPath = (pathname) => pathname !== ROUTES.home ? '/' + pathname.split('/')[1] : pathname
  let user = isLogged()
  const [pathHeader, setPathHeader] = React.useState(findActualRouteToShowHeader(findPath(history.location.pathname)))
  history.listen(location => {
    const firstLocation = findPath(location.pathname)
    setPathHeader(findActualRouteToShowHeader(firstLocation))
    user = isLogged()
  })

  return (
    <Router history={history}>
      <Header {...pathHeader} user={user} />
      <Switch>
        <Route exact path={`${ROUTES.seeRegister}/:id`} component={DashBoard}/>
        <PrivateRoute
          exact
          path={ROUTES.home}
          component={Home}
          rule={LocalStorage.user}
          linkRedirected={ROUTES.dashboard}
          privateOnRule
        />
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
          linkRedirected={ROUTES.registerBrand}
          rule={LocalStorage.registerBrand}
        />
        <Route exact path={ROUTES.registerBrand} component={Register}/>
        <Route exact path={ROUTES.orderDetail} component={SaveOrder}/>
        <Route exact path={ROUTES.searchBrand} component={DashBoard}/>
        <Route exact path={ROUTES.moreInfo + '/:name'} component={MoreInfo}/>
        <Route exact path={ROUTES.terms} component={TermsConditions}/>
        <Route exact path={ROUTES.faq} component={Faqs}/>
        <Route exact path={ROUTES.beginBrand + '/:name'} component={ConstructionPage}/>
        <Route exact component={PageNotFound}/>
      </Switch>
    </Router>
  )
}
export default MainApp
