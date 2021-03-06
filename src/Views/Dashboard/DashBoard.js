import React, { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import ListBrands from './seeAllBrands/ListBrands'
import Detail from './seeDetail/Detail'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { COLOR, LocalStorage, ROUTES } from '../../utils/constants'
import { isEmptyArray } from '../../utils/utils'
import SearchBrand from './searchBrand/SearchBrand'
import Header from '../common/header/Header'
import { useHeader } from '../../hooks/useHeader'

const tableInformation = {
  headers: ['Fecha', 'Denominacion', 'Asignado', 'Registro No.', 'Estatus', ''],
  keys: ['creationDate', 'marcaType', 'brandName', 'nroRegistro', 'status', 'button']
}

const formSearchStructure = [
  { label: 'Fecha:', name: 'fecha', type: 'date' },
  { label: 'Título:', name: 'titulo', type: 'text' },
  { label: 'Buscar por expediente:', name: 'expediente', type: 'text' },
  { label: 'Vencimiento:', name: 'vencimiento', type: 'date' }
]

const DashBoard = (props) => {
  const [paperworks, setPaperworks] = useState([])
  const [mainContainer, headerUp] = useHeader()
  useEffect(() => {
    if (window.localStorage.getItem(LocalStorage.registerBrand)) {
      window.localStorage.removeItem(LocalStorage.registerBrand)
    }

    if (window.localStorage.getItem(LocalStorage.paperworks)) {
      setPaperworks(JSON.parse(window.localStorage.getItem(LocalStorage.paperworks)))
    }
  }, [])

  const commonProps = {
    formStructure: formSearchStructure,
    tableInformation,
    data: paperworks
  }

  const RoutesDetail = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.searchBrand} component={SearchBrand} />
        <Route exact path={`${ROUTES.seeRegister}/:id`} component={Detail} />
        <Route exact path={ROUTES.dashboard} render={(props) => <ListBrands {...commonProps} {...props} />} />
      </Switch>
    </BrowserRouter>
  )

  return (
    <div ref={mainContainer}>
      {/*<Header fixed={false} color={COLOR.primary} light onLogout={logout} />*/}
      <div className='row mx-0'>
        <div className='col-2 px-0'>
          <Navbar header={headerUp} />
        </div>
        <div className='col-10 px-0' style={{ background: '#f7f8fc', overflowY: 'auto', height: headerUp ? 'calc(100vh - 66px)' : '100vh' }}>
          {
            isEmptyArray(paperworks)
              ? <h3 className='mt-4 text-center'>No tienes registros</h3>
              : <RoutesDetail />
          }
        </div>
      </div>
    </div>
  )
}

export default DashBoard
