import React, { useEffect, useState } from 'react'
import HeaderDash from './header/header'
import Navbar from './navbar/Navbar'
import ListBrands from './seeAllBrands/ListBrands'
import Detail from './seeDetail/Detail'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ROUTES } from '../../utils/constants'
import { isEmptyArray } from '../../utils/utils'
import { connect } from 'react-redux'

const DashBoard = ({ dataRegister, ...props }) => {
  const [user, setUser] = useState('')
  const [data, setData] = useState('')

  const state = props.location.state

  console.log('las props en dash ', props)
  useEffect(() => {

    setUser(`${state.user || 'Usuario'}`)
    setData(state.paperworks)
    // console.log('todos las registros ', data)
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
      <HeaderDash user={user}/>
      <div className='row mx-0'>
        <div className='col-2 px-0'>
          <Navbar/>
        </div>
        <div className='col-10 px-0' style={{ background: '#f7f8fc' }}>
          <div className='col py-3 px-4' style={{ background: 'white' }}>
            Tus trámites
          </div>
          {
            isEmptyArray(data)
              ? <div style={{ fontSize: '2rem', textAlign: 'center', marginTop: '2rem' }}>No tienes registros</div>
              : <BrowserRouter>
                <Switch>
                  <Route exact path={ROUTES.dashboard} render={(props) => <ListBrands {...commonProps} {...props} />}/>
                  <Route exact path={ROUTES.seeRegister + '/:id'} render={(props) => <Detail {...props} data={data}/>}/>
                </Switch>
              </BrowserRouter>
          }
        </div>
      </div>
    </>
  )
}
const mapStateToProps = (state) => ({ dataRegister: state.registerBrandData, data: state.allPaperWorks })
export default connect(mapStateToProps)(DashBoard)
