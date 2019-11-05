import React from 'react'
import { StyledType, StyledValue, StyledNoOrder, StyledIcon } from './styles'
import { COLOR } from '../../constants'

const OrderCard = (props) => {
  /* const fakeData = [
    {
      field: 'Tipo de registro',
      value: 'Mixta'
    },
    {
      field: 'Nombre de registro',
      value: 'Grayshirts'
    },
    {
      field: 'Pais de registro',
      value: 'Argentina'
    }
  ] */
  const fakeData = null

  return (
    <div className='card text-center shadow-card border-0'>
      <div className='card-header bg-white py-3' style={{ borderBottomWidth: '2px' }}>
        <h4 className='text-left mb-0'>Detalle de Orden</h4>
      </div>
      {
        fakeData
          ? <Order data={fakeData} />
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

const Fields = ({ data }) => {
  return (
    <ul className='list-group list-group-flush text-left'>
      {
        data.map((elem) => (
          <li key={elem.field} className='list-group-item d-flex justify-content-between px-0'>
            <StyledType>{elem.field}:</StyledType>
            <StyledValue style={{ fontSize: '.9em' }}>{elem.value}</StyledValue>
          </li>
        ))
      }
    </ul>
  )
}

const Order = ({ data }) => (
  <>
    <Fields data={data} />
    <div className='card-footer text-left d-flex justify-content-between' style={{ backgroundColor: COLOR.mediumGray }}>
      <h5 className='mb-0 font-weight-bold'>Total:</h5>
      <h5 className='mb-0 font-weight-bold'>$54</h5>
    </div>
  </>
)
export default OrderCard
