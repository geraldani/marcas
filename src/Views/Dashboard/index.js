import React from 'react'
import HeaderDash from './header/header'
import Navbar from './navbar/Navbar'
import ListBrands from './seeAllBrands/ListBrands'
import Detail from './seeDetail/Detail'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ROUTES } from '../../utils/constants'
import { isEmptyArray } from '../../utils'

const DashBoard = ({ user = 'Geraldyn Chirinos', data = [] }) => {
  const fakeTitleTable = [
    'Fecha',
    'Título',
    'Asignado',
    'Expediente',
    'Vencimiento',
    ''
  ]
  const fakeTableAtributes = ['date', 'titular', 'assigned', 'expediente', 'expiration', 'button']
  const tableInformation = {
    headers: fakeTitleTable,
    data: data,
    body: fakeTableAtributes
  }
  const formSearchStructure = [
    { label: 'Fecha:', name: 'fecha', type: 'date' },
    { label: 'Título:', name: 'titulo', type: 'text' },
    { label: 'Buscar por expediente:', name: 'expediente', type: 'text' },
    { label: 'Vencimiento:', name: 'vencimiento', type: 'date' }
  ]

  const commonProps = {
    formStructure: formSearchStructure,
    tableInformation
  }

  return (
    <>
      <HeaderDash user={user} />
      <div className='row mx-0'>
        <div className='col-2 px-0'>
          <Navbar />
        </div>
        <div className='col-10 px-0' style={{ background: '#f7f8fc' }}>
          <div className='col py-3 px-4' style={{ background: 'white' }}>
            Tus trámites
          </div>
          {
            isEmptyArray(data)
              ? <div style={{ fontSize: '2rem', textAlign: 'center', marginTop: '2rem' }}>No tienes tramites</div>
              : <BrowserRouter>
                <Switch>
                  <Route exact path={ROUTES.home} render={(props) => <ListBrands {...commonProps} {...props} />} />
                  <Route exact path={ROUTES.seeRegister + '/:id'} render={(props) => <Detail {...props} data={data} />} />
                </Switch>
              </BrowserRouter>
          }
        </div>
      </div>
    </>
  )
}

export default DashBoard
