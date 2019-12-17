import React from 'react'
import { BrowserRouter, Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home/Home'
import Register from '../Components/RegisterBrand/Register'
import FinishRegister from './RegisterBrand/finish-register/FinishRegister'
import MoreInfo from './Home/moreInfo/moreInfo'
import Faqs from './Faq/Faqs'
import TermsConditions from './Faq/TermsConditions'
import SaveOrder from '../Components/RegisterBrand/SaveOrder'
import ConstructionPage from './common/Warnings/constructioPage'
import PageNotFound from './common/Warnings/PageNotFound'
import { ROUTES } from '../utils/constants'
import DashBoard from './Dashboard/DashBoard'
import SearchBrand from './Dashboard/searchBrand/SearchBrand'
import RegisterUserComponent from '../Components/RegisterUser/RegisterUserComponent'
import RegisterUserWithBrand from '../Components/RegisterUser/RegisterUserWithBrand'
import LoginComponent from '../Components/LoginUser/LoginComponent'
import { history } from '../redux/store'

/* const fakeData = [
  {
    id: 1,
    date: new Date(),
    titularID: 785,
    titular: 'Marcas locales',
    assigned: 'Geraldyn Chirinos',
    expediente: 5478,
    tipoId: 'D',
    tipo: 'algun tipo',
    group: 'Minos',
    agent: 'un agente',
    cargo: 'gerente',
    cuil: '29-87514-54',
    persoType: 'Juridica',
    nroDoc: '8745698554',
    carta: 'Titular',
    sobre: 'sobre algo',
    factura: 'titular',
    atencion: 'una linda atencion',
    sector: 'un sector lindo',
    rubro: 'Oro',
    direccion: 'Av. Avellaneda 8857',
    localidad: 'C.A.B.A',
    potalCode: '1854',
    provincia: 'Buenos Aires',
    pais: 'Argentina',
    expiration: 'Vence en 8 días'
  },
  {
    id: 2,
    date: new Date(2018, 11, 24, 18, 25, 30),
    titularID: 175,
    titular: 'Marcas sociales',
    assigned: 'Photography',
    expediente: 5478,
    tipoId: 'D',
    tipo: 'algun tipo',
    group: 'Minos',
    agent: 'un agente',
    cargo: 'gerente',
    cuil: '29-87514-54',
    persoType: 'Juridica',
    nroDoc: '8745698554',
    carta: 'Titular',
    sobre: 'sobre algo',
    factura: 'titular',
    atencion: 'una linda atencion',
    sector: 'un sector lindo',
    rubro: 'Oro',
    direccion: 'Av. Avellaneda 8857',
    localidad: 'C.A.B.A',
    potalCode: '1854',
    provincia: 'Buenos Aires',
    pais: 'Argentina',
    expiration: 'Vence en 8 días'
  },
  {
    id: 3,
    date: new Date(),
    titularID: 475,
    titular: 'Marcas gringas',
    assigned: 'Estudio',
    expediente: 5478,
    tipoId: 'D',
    tipo: 'algun tipo',
    group: 'Minos',
    agent: 'un agente',
    cargo: 'gerente',
    cuil: '29-87514-54',
    persoType: 'Juridica',
    nroDoc: '8745698554',
    carta: 'Titular',
    sobre: 'sobre algo',
    factura: 'titular',
    atencion: 'una linda atencion',
    sector: 'un sector lindo',
    rubro: 'Oro',
    direccion: 'Av. Avellaneda 8857',
    localidad: 'C.A.B.A',
    potalCode: '1854',
    provincia: 'Buenos Aires',
    pais: 'Argentina',
    expiration: 'Vence en 45 días'
  },
  {
    id: 4,
    date: new Date(),
    titularID: 75,
    titular: 'un coso',
    assigned: 'Estudio',
    expediente: 5478,
    tipoId: 'D',
    tipo: 'algun tipo',
    group: 'Minos',
    agent: 'un agente',
    cargo: 'gerente',
    cuil: '29-87514-54',
    persoType: 'Juridica',
    nroDoc: '8745698554',
    carta: 'Titular',
    sobre: 'sobre algo',
    factura: 'titular',
    atencion: 'una linda atencion',
    sector: 'un sector lindo',
    rubro: 'Oro',
    direccion: 'Av. Avellaneda 8857',
    localidad: 'C.A.B.A',
    potalCode: '1854',
    provincia: 'Buenos Aires',
    pais: 'Argentina',
    expiration: 'Vence mañana'
  },
  {
    id: 5,
    date: new Date(),
    titularID: 185,
    titular: 'Marcas locales',
    assigned: 'Nails',
    expediente: 5478,
    tipoId: 'D',
    tipo: 'algun tipo',
    group: 'Minos',
    agent: 'un agente',
    cargo: 'gerente',
    cuil: '29-87514-54',
    persoType: 'Juridica',
    nroDoc: '8745698554',
    carta: 'Titular',
    sobre: 'sobre algo',
    factura: 'titular',
    atencion: 'una linda atencion',
    sector: 'un sector lindo',
    rubro: 'Oro',
    direccion: 'Av. Avellaneda 8857',
    localidad: 'C.A.B.A',
    potalCode: '1854',
    provincia: 'Buenos Aires',
    pais: 'Argentina',
    expiration: 'Vence en 8 días'
  },
  {
    id: 6,
    date: new Date(),
    titularID: 58,
    titular: 'Marcas locales',
    assigned: 'Estudio',
    expediente: 5478,
    tipoId: 'D',
    tipo: 'algun tipo',
    group: 'Minos',
    agent: 'un agente',
    cargo: 'gerente',
    cuil: '29-87514-54',
    persoType: 'Juridica',
    nroDoc: '8745698554',
    carta: 'Titular',
    sobre: 'sobre algo',
    factura: 'titular',
    atencion: 'una linda atencion',
    sector: 'un sector lindo',
    rubro: 'Oro',
    direccion: 'Av. Avellaneda 8857',
    localidad: 'C.A.B.A',
    potalCode: '1854',
    provincia: 'Buenos Aires',
    pais: 'Argentina',
    expiration: 'Vence en 8 días'
  },
  {
    id: 7,
    date: new Date(),
    titularID: 458,
    titular: 'Marcas locales',
    assigned: 'Estudio',
    expediente: 5478,
    tipoId: 'D',
    tipo: 'algun tipo',
    group: 'Minos',
    agent: 'un agente',
    cargo: 'gerente',
    cuil: '29-87514-54',
    persoType: 'Juridica',
    nroDoc: '8745698554',
    carta: 'Titular',
    sobre: 'sobre algo',
    factura: 'titular',
    atencion: 'una linda atencion',
    sector: 'un sector lindo',
    rubro: 'Oro',
    direccion: 'Av. Avellaneda 8857',
    localidad: 'C.A.B.A',
    potalCode: '1854',
    provincia: 'Buenos Aires',
    pais: 'Argentina',
    expiration: 'Vence en 8 días'
  },
  {
    id: 8,
    date: new Date(),
    titularID: 9878,
    titular: 'Marcas locales',
    assigned: 'Estudio',
    expediente: 5478,
    tipoId: 'D',
    tipo: 'algun tipo',
    group: 'Minos',
    agent: 'un agente',
    cargo: 'gerente',
    cuil: '29-87514-54',
    persoType: 'Juridica',
    nroDoc: '8745698554',
    carta: 'Titular',
    sobre: 'sobre algo',
    factura: 'titular',
    atencion: 'una linda atencion',
    sector: 'un sector lindo',
    rubro: 'Oro',
    direccion: 'Av. Avellaneda 8857',
    localidad: 'C.A.B.A',
    potalCode: '1854',
    provincia: 'Buenos Aires',
    pais: 'Argentina',
    expiration: 'Vence en 8 días'
  },
  {
    id: 9,
    date: new Date(),
    titularID: 978,
    titular: 'Marcas locales',
    assigned: 'Estudio',
    expediente: 5478,
    tipoId: 'D',
    tipo: 'algun tipo',
    group: 'Minos',
    agent: 'un agente',
    cargo: 'gerente',
    cuil: '29-87514-54',
    persoType: 'Juridica',
    nroDoc: '8745698554',
    carta: 'Titular',
    sobre: 'sobre algo',
    factura: 'titular',
    atencion: 'una linda atencion',
    sector: 'un sector lindo',
    rubro: 'Oro',
    direccion: 'Av. Avellaneda 8857',
    localidad: 'C.A.B.A',
    potalCode: '1854',
    provincia: 'Buenos Aires',
    pais: 'Argentina',
    expiration: 'Vence en 8 días'
  },
  {
    id: 10,
    date: new Date(),
    titularID: 89,
    titular: 'Marcas locales',
    assigned: 'Estudio',
    expediente: 5478,
    tipoId: 'D',
    tipo: 'algun tipo',
    group: 'Minos',
    agent: 'un agente',
    cargo: 'gerente',
    cuil: '29-87514-54',
    persoType: 'Juridica',
    nroDoc: '8745698554',
    carta: 'Titular',
    sobre: 'sobre algo',
    factura: 'titular',
    atencion: 'una linda atencion',
    sector: 'un sector lindo',
    rubro: 'Oro',
    direccion: 'Av. Avellaneda 8857',
    localidad: 'C.A.B.A',
    potalCode: '1854',
    provincia: 'Buenos Aires',
    pais: 'Argentina',
    expiration: 'Vence en 8 días'
  }
] */

// si privateOnLogged es true, significa que la ruta es privada cuando alguien esta logeado, caso contrario, la ruta es privada cuando no se esta logueado
const PrivateRoute = ({ component: Component, linkRedirected, privateOnLogged, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      // window.localStorage.removeItem('token')
      // window.localStorage.removeItem('user')
      // window.localStorage.removeItem('paperwork')
      const currentUser = window.localStorage.getItem('token')
      if (privateOnLogged) {
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
      <Route exact path={ROUTES.home} component={Home}/>
      <PrivateRoute exact path={ROUTES.login} component={LoginComponent} linkRedirected={ROUTES.dashboard}
                    privateOnLogged/>
      <PrivateRoute exact path={ROUTES.register} component={RegisterUserComponent} linkRedirected={ROUTES.dashboard}
                    privateOnLogged/>
      <PrivateRoute exact path={ROUTES.dashboard} component={DashBoard} linkRedirected={ROUTES.login}/>
      <Route exact path={ROUTES.registerBrand} component={Register}/>
      <Route exact path={ROUTES.orderDetail} component={SaveOrder}/>
      <Route exact path={ROUTES.searchBrand} component={SearchBrand}/>
      <Route exact path={ROUTES.finishRegister} component={RegisterUserWithBrand}/>
      <Route exact path={ROUTES.moreInfo + '/:name'} component={MoreInfo}/>
      <Route exact path={ROUTES.terms} component={TermsConditions}/>
      <Route exact path={ROUTES.faq} component={Faqs}/>
      <Route exact path={ROUTES.beginBrand + '/:name'} component={ConstructionPage}/>
      <Route exact component={PageNotFound}/>
      {/*<Route exact path={ROUTES.seeRegister + '/:id'} render={(props) => <DashBoard {...props} data={fakeData} />} />*/}
    </Switch>
  </Router>
)
export default MainApp
