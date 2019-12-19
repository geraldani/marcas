import React, { useEffect, useState } from 'react'
import HeaderDash from './header/header'
import Navbar from './navbar/Navbar'
import ListBrands from './seeAllBrands/ListBrands'
import Detail from './seeDetail/Detail'
import { Router, Route, Switch } from 'react-router-dom'
import { COLOR, LocalStorage, ROUTES } from '../../utils/constants'
import { isEmptyArray } from '../../utils/utils'
import SearchBrand from './searchBrand/SearchBrand'
import {history} from '../../helpers/history'

const DashBoard = (props) => {
  const [user, setUser] = useState('')
  const [paperworks, setPaperworks] = useState([])
  console.log('las props en dashboard ', props)
  useEffect(() => {
    if (window.localStorage.getItem(LocalStorage.registerBrand)) {
      window.localStorage.removeItem(LocalStorage.registerBrand)
    }

    if (window.localStorage.getItem(LocalStorage.user)) {
      setUser(JSON.parse(window.localStorage.getItem(LocalStorage.user)))
    }
    if (window.localStorage.getItem(LocalStorage.paperworks)) {
      setPaperworks(JSON.parse(window.localStorage.getItem(LocalStorage.paperworks)))
    }
  }, [])

  const fakeTitleTable = [
    'Tipo de marca',
    'Título de la marca',
    'Tipo de registro',
    ''
  ]

  const fakeTableAtributes = ['marcaType', 'brandName', 'registerType', 'button']
  const tableInformation = {
    headers: fakeTitleTable,
    data: paperworks,
    body: fakeTableAtributes
  }

  const formSearchStructure = [
    { label: 'Fecha:', name: 'fecha', type: 'date' },
    { label: 'Título:', name: 'titulo', type: 'text' },
    { label: 'Buscar por expediente:', name: 'expediente', type: 'text' },
    { label: 'Vencimiento:', name: 'vencimiento', type: 'date' }
  ]

  const RoutesDetail = () => {
    if (isEmptyArray(paperworks)) {
      return (
        <div style={{ fontSize: '2rem', textAlign: 'center', marginTop: '2rem' }}>
          No tienes registros
        </div>
      )
    }
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={ROUTES.searchBrand} component={SearchBrand} />
          <Route exact path={`${ROUTES.seeRegister}/:id`} component={Detail} />
          <Route exact path={ROUTES.dashboard} render={(props) => <ListBrands {...commonProps} {...props} />} />
        </Switch>
      </Router>
    )
  }

  const logout = () => {
    window.localStorage.removeItem(LocalStorage.token)
    window.localStorage.removeItem(LocalStorage.user)
    window.localStorage.removeItem(LocalStorage.paperworks)
    props.history.push(ROUTES.login)
  }

  const commonProps = {
    formStructure: formSearchStructure,
    tableInformation
  }

  return (
    <div style={{ height: '100vh' }}>
      <HeaderDash user={user.name} />
      <div className='row mx-0'>
        <div className='col-2 px-0'>
          <Navbar onLogout={logout} />
        </div>
        <div className='col-10 px-0' style={{ background: '#f7f8fc', overflowY: 'auto', height: 'calc(100vh - 66px)' }}>
          <RoutesDetail />
        </div>
      </div>
    </div>
  )
}

export default DashBoard
