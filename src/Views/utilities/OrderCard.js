import React from 'react'
import styled from 'styled-components'
import { COLORS } from './constants'
import { IoIosInformationCircle as Icon } from 'react-icons/io'

const OrderCard = () => {
  const order = false
  return (
    <div className='card text-center shadow-card border-0'>
      <div className='card-header bg-white py-3' style={{ borderBottomWidth: '2px' }}>
        <h4 className='text-left mb-0'>Detalle de Orden</h4>
      </div>
      {
        order
          ? <Order />
          : <NoOrder />
      }
    </div>
  )
}

const NoOrder = () => (
  <div className='p-5 position-relative'>
    <Style.Icon size='25px' />
    <Style.noOrder>Todavía no hay avances de tu trámite</Style.noOrder>
  </div>
)

const Order = () => (
  <>
    <ul className='list-group list-group-flush text-left'>
      <li className='list-group-item d-flex justify-content-between'>
        <Style.type>Tipo de registro:</Style.type>
        <Style.value style={{ fontSize: '.9em' }}>Mixta</Style.value>
      </li>
      <li className='list-group-item d-flex justify-content-between'>
        <Style.type>Nombre de registro:</Style.type>
        <Style.value style={{ fontSize: '.9em' }}>Grayshirts</Style.value>
      </li>
      <li className='list-group-item d-flex justify-content-between'>
        <Style.type>País de registro:</Style.type>
        <Style.value style={{ fontSize: '.9em' }}>Argentina</Style.value>
      </li>
    </ul>
    <div className='card-footer text-left d-flex justify-content-between' style={{ backgroundColor: COLORS.mediumGray }}>
      <h5 className='mb-0 font-weight-bold'>Total:</h5>
      <h5 className='mb-0 font-weight-bold'>$520</h5>
    </div>
  </>
)

const Style = {
  type: styled.span`
    color: ${COLORS.textColor};
    font-size: .9em;
    opacity: .8;
`,
  value: styled.span`
    font-size: .9em;
    opacity: .9;
`,
  noOrder: styled.p`
    margin-bottom: 0;
    color: ${COLORS.darkGrey};
    font-size: .95em;
    line-height: 1.2;
`,
  Icon: styled(Icon)`
    position: absolute;
    top: 20px;
    right: 0;
    left: 0;
    margin: auto;
`
}

export default OrderCard
