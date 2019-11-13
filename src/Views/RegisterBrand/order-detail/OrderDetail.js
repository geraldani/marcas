import React from 'react'
import CardSteps from '../../common/cards/steps/CardSteps'
import CircleSteps from '../../common/circles/CircleSteps'
import { StyledTotal, StyledItem, StyledType, StyledValue, StyledFieldContainer } from './styles'
import { ROUTES } from '../../common/constants'
import Button from '../../common/buttons/Button'
import Header from '../../common/header/Header'

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
      { ...state.color, label: 'Tipo de registro' },
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
              <Button className='px-5 w-md-100' title='Finalizar' link={ROUTES.finishRegister} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Fields = ({ items }) => {
  return (
    <ul className='list-group list-group-flush text-left'>
      {
        items.map((elem) => (
          <StyledItem key={elem.name}>
            <StyledType>{elem.label}:</StyledType>
            <StyledValue style={{ fontSize: '.9em' }}>{elem.value || '------'}</StyledValue>
          </StyledItem>
        ))
      }
    </ul>
  )
}

export default OrderDetail
