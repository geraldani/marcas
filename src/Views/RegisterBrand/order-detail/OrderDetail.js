import React from 'react'
import CardSteps from '../../common/cards/steps/CardSteps'
import CircleSteps from '../../common/circles/CircleSteps'
import { StyledTotal, StyledItem, StyledType, StyledValue, StyledFieldContainer } from './styles'
import { ROUTES } from '../../common/constants'
import Button from '../../common/buttons/Button'
import Header from '../../common/header/Header'

const fakeData = [
  {
    items: [
      { field: 'Nombre', value: 'Daniela' },
      { field: 'Apellido', value: 'De Sousa' },
      { field: 'Email', value: 'geraldynchidesousa@gmail.com' },
      { field: 'Razon social', value: '------' },
      { field: 'País apoderado', value: 'Argentina' },
      { field: 'CUIT', value: '20-00000000-6' }
    ]
  },
  {
    items: [
      { field: 'Tipo de registro', value: 'Mixta' },
      { field: 'Nombre de registro', value: 'Grayshirts' },
      { field: 'Pais de registro', value: 'Argentina' }
    ]
  },
  {
    items: [
      { field: 'Clase 1', value: '$$' },
      { field: 'Clase 15', value: '$$' }
    ]
  }
]

const OrderDetail = () => {
  return (
    <>
      <Header />
      <div className='pt-5 px-md-5 px-3 margin-header'>
        <div className='row justify-content-center align-items-center flex-column'>
          <CircleSteps actualStep={6} totalSteps={5} />
          <div className='col-md-9 col-12 mt-3 mb-5'>
            <CardSteps title='Detalle de orden' className='pb-5'>
              {
                fakeData.map(elem => (
                  <StyledFieldContainer key={elem} className='col-11 col-md-9'>
                    <Fields items={elem.items} />
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
          <StyledItem key={elem.field}>
            <StyledType>{elem.field}:</StyledType>
            <StyledValue style={{ fontSize: '.9em' }}>{elem.value}</StyledValue>
          </StyledItem>
        ))
      }
    </ul>
  )
}

export default OrderDetail
