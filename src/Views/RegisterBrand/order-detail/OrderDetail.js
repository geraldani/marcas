import React, { useState } from 'react'
import CardSteps from '../../common/cards/steps/CardSteps'
import CircleSteps from '../../common/circles/CircleSteps'
import { StyledTotal, StyledItem, StyledType, StyledValue, StyledFieldContainer } from './styles'
import { ROUTES } from '../../common/constants'
import Button from '../../common/buttons/Button'
import Header from '../../common/header/Header'
import ModalLoader from '../../common/modal/ModalLoader'
// import { useFetch } from '../../../hooks/useFetch'

const getData = (state) => {
  const data = {}
  const marcas = []

  Object.values(state).forEach(elem => {
    let value = elem.value
    if (elem.name === 'marcaType') {
      elem.options.forEach(elem => {
        if (elem.value) marcas.push(elem.name)
      })
      value = marcas
    }
    data[elem.name] = value
  })
  return data
}

const handleFinishClick = async (e, state, history, setLoading) => {
  e.preventDefault()
  const data = getData(state)
  const url = 'https://marcas-api-test.herokuapp.com/paperwork/new'
  const fetchBody = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }

  try {
    setLoading(true)
    const res = await window.fetch(url, fetchBody)
    const response = await res.json()
    console.log('la respuesta fue ', response)
    setLoading(false)
    history.push(ROUTES.finishRegister)
  } catch (e) {
    console.log('Ocurrio un error ', e.message)
  }
}

const OrderDetail = (props) => {
  const state = props.location.state // el estado pasapo por props en el history
  const groupFilds = [
    [
      state.name,
      state.surname,
      state.email,
      state.razonSocial,
      { ...state.countryGestor, label: 'País apoderado' },
      state.cuit
    ],
    [
      { ...state.marcaType, label: 'Tipo de registro' },
      { ...state.brandName, label: 'Nombre de registro' },
      { ...state.countryRegister, label: 'País de registro' }
    ],
    [
      { label: 'Clase 1', value: '$$' },
      { label: 'Clase 15', value: '$$' }
    ]
  ]
  const [loading, setLoading] = useState(false)

  const handleBackClick = () => {
    props.history.push({
      pathname: ROUTES.registerBrand,
      state: { step: 5, data: state }
    })
  }
  return (
    <>
      <Header />
      <div className='pt-5 px-md-5 px-3 margin-header mb-4'>
        <div className='row justify-content-center align-items-center flex-column'>
          <CircleSteps actualStep={6} totalSteps={5} />
          <div className='col-md-9 col-12 mt-3'>
            <CardSteps title='Detalle de orden' className='pb-5'>
              {
                groupFilds.map(vec => (
                  <StyledFieldContainer key={vec} className='col-11 col-md-9'>
                    <Fields items={vec} />
                  </StyledFieldContainer>
                ))
              }
            </CardSteps>
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <StyledTotal>Total: $520</StyledTotal>
              <div className='d-flex justify-content-between w-100'>
                <Button
                  className='px-5 w-md-100'
                  title='Volver'
                  styled='outline-purple'
                  onClick={handleBackClick}
                />
                <Button
                  className='px-5 w-md-100'
                  title='Finalizar'
                  onClick={(e) => handleFinishClick(e, state, props.history, setLoading)}
                />
              </div>
            </div>
            {
              loading && <ModalLoader />
            }
          </div>
        </div>
      </div>
    </>
  )
}

const Data = ({ elem }) => {
  const comma = (i, a) => i !== (a.length - 1) ? ', ' : ''

  if (elem.type === 'checkbox') {
    return (
      elem.options.filter(elem => elem.value)
        .map((o, index, arr) => <span key={o.name}>{o.label + comma(index, arr)}</span>)
    )
  }
  if (typeof (elem.value) === 'object') {
    return elem.value.map((o, index, arr) => <span key={o}>{o + comma(index, arr)}</span>)
  }
  return elem.value || '------'
}

const Fields = ({ items }) => {
  return (
    <ul className='list-group list-group-flush text-left'>
      {
        items.map((elem) => {
          return (
            <StyledItem key={elem.label}>
              <StyledType>{elem.label}:</StyledType>
              <StyledValue style={{ fontSize: '.9em' }}>
                <Data elem={elem} />
              </StyledValue>
            </StyledItem>
          )
        })
      }
    </ul>
  )
}

export default OrderDetail
