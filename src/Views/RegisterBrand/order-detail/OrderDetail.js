import React from 'react'
import CardSteps from '../../common/cards/steps/CardSteps'
import CircleSteps from '../../common/circles/CircleSteps'
import Button from '../../common/buttons/Button'
import Header from '../../common/header/Header'
import ModalLoader from '../../common/modal/ModalLoader'
import { StyledTotal, StyledItem, StyledType, StyledValue, StyledFieldContainer } from './styles'

const OrderDetail = (props) => {
  const { state, handleClickBack, handleClickFinish, loading } = props
  const groupFields = getGroupFields(state)

  return (
    <>
      <Header />
      <div className='pt-5 px-md-5 px-3 margin-header mb-4'>
        <div className='row justify-content-center align-items-center flex-column'>
          <CircleSteps actualStep={6} totalSteps={5} />
          <div className='col-md-9 col-12 mt-3'>
            <CardSteps title='Detalle de orden' className='pb-5'>
              <GroupFields fields={groupFields} />
            </CardSteps>
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <StyledTotal>Total: $520</StyledTotal>
              <ButtonsNavigation handleClickBack={handleClickBack} handleClickFinish={handleClickFinish} />
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

const ButtonsNavigation = ({ handleClickBack, handleClickFinish }) => (
  <div className='d-flex justify-content-between w-100'>
    {/* BOTON DE REGRESAR A MODIFICAR LA ORDEN */}
    <Button
      className='px-5 w-md-100'
      title='Volver'
      styled='outline-primary'
      onClick={handleClickBack}
    />
    {/* BOTON DE GUARDAR LA ORDER */}
    <Button
      className='px-5 w-md-100'
      title='Finalizar'
      onClick={handleClickFinish}
    />
  </div>
)

const Data = ({ elem }) => {
  // Esto es para formatear cuando debe ir coma y cuando no (ejemplo en la ultima palabra no debe ir)
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

const GroupFields = ({ fields }) => (
  fields.map(vec => (
    <StyledFieldContainer key={vec} className='col-11 col-md-9'>
      <Fields items={vec} />
    </StyledFieldContainer>
  ))
)

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

// para contruir los apartados del detalle de la compra
const getGroupFields = (state) => {
  return [
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
}

export default OrderDetail
