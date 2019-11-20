import React from 'react'
import CardSteps from '../../common/cards/steps/CardSteps'
import CircleSteps from '../../common/circles/CircleSteps'
import { StyledTotal, StyledItem, StyledType, StyledValue, StyledFieldContainer } from './styles'
import { ROUTES } from '../../common/constants'
import Button from '../../common/buttons/Button'
import Header from '../../common/header/Header'

const handleClick = (e, state) => {
  e.preventDefault()
  const data = {}
  const marcas = []

  Object.values(state).forEach(elem => {
    let value = elem.value
    if (elem.name === 'marcaType') {
      elem.options.forEach(elem => {
        if (elem.value) {
          marcas.push(elem.name)
        }
      })
      value = marcas
    }
    data[elem.name] = value
  })
  // window.alert('hay que guardar esto')

  const url = 'https://marcas-api-test.herokuapp.com/paperwork/new'
  window.fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(response => console.log('Success:', response))
    .catch(error => console.error('Error:', error))
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

  return (
    <>
      <Header />
      <div className='pt-5 px-md-5 px-3 margin-header'>
        <div className='row justify-content-center align-items-center flex-column'>
          <CircleSteps actualStep={6} totalSteps={5} />
          <div className='col-md-9 col-12 mt-3 mb-5'>
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
              <Button className='px-5 w-md-100' title='Finalizar' onClick={(e) => handleClick(e, state)} />
            </div>
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
            <StyledItem key={elem.name}>
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
