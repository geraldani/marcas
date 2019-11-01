import React from 'react'
import styled from 'styled-components'
import { COLOR } from './constants'
import { IoIosInformationCircle as Icon } from 'react-icons/io'

const OrderCard = (props) => {
  // const order = false
  return (
    <div className='card text-center shadow-card border-0'>
      <div className='card-header bg-white py-3' style={{ borderBottomWidth: '2px' }}>
        <h4 className='text-left mb-0'>Detalle de Orden</h4>
      </div>
      {
        props.data
          ? <Order data={props.data} />
          : <NoOrder />
      }
    </div>
  )
}

const NoOrder = () => (
  <div className='p-5 position-relative'>
    <StyledIcon size='25px' />
    <StyledNoOrder>Todavía no hay avances de tu trámite</StyledNoOrder>
  </div>
)

const Order = ({ data }) => (
  <>
    <ul className='list-group list-group-flush text-left'>
      {
        data.map((elem) => (
          <li key={elem.field} className='list-group-item d-flex justify-content-between'>
            <StyledType>{elem.field}:</StyledType>
            <StyledValue style={{ fontSize: '.9em' }}>{elem.value}</StyledValue>
          </li>
        ))
      }
    </ul>
    <div className='card-footer text-left d-flex justify-content-between' style={{ backgroundColor: COLOR.mediumGray }}>
      <h5 className='mb-0 font-weight-bold'>Total:</h5>
      <h5 className='mb-0 font-weight-bold'> </h5>
    </div>
  </>
)

const StyledType = styled.span`
  color: ${COLOR.textColor};
  font-size: .9em;
  opacity: .8;
`
const StyledValue = styled.span`
  font-size: .9em;
  opacity: .9;
`
const StyledNoOrder = styled.p`
  margin-bottom: 0;
  color: ${COLOR.darkGrey};
  font-size: .95em;
  line-height: 1.2;
`
const StyledIcon = styled(Icon)`
  position: absolute;
  top: 20px;
  right: 0;
  left: 0;
  margin: auto;
`

export default OrderCard
