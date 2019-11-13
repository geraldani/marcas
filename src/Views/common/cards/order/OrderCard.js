import React from 'react'
import { StyledType, StyledValue, StyledNoOrder, StyledIcon } from './styles'
import { COLOR } from '../../constants'
import icon from '../../../../assets/img/svg/icon-empty.svg'

const isThereData = (data) => {
  let hayData = false
  data.forEach(elem => {
    if (elem.value && elem.value.length !== 0) hayData = true
  })
  return hayData
}

const OrderCard = ({ state }) => {
  const data = [
    { ...state.marcaType, label: 'Tipo de registro' },
    { ...state.brandName, label: 'Nombre de registro' },
    { ...state.countryRegister, label: 'País de registro' }
  ]
  return (
    <div className='card text-center shadow-card border-0'>
      <div className='card-header bg-white py-3' style={{ borderBottomWidth: '2px' }}>
        <h4 className='text-left mb-0'>Detalle de Orden</h4>
      </div>
      {
        isThereData(data)
          ? <Order data={data} />
          : <NoOrder />
      }
    </div>
  )
}

const NoOrder = () => (
  <div className='p-5 position-relative'>
    <StyledIcon src={icon} alt='icon' />
    <StyledNoOrder>Todavía no hay avances de tu trámite</StyledNoOrder>
  </div>
)

const Data = ({ element }) => {
  /* if (typeof (element.value) === 'object') {
    return element.value.map(el => <StyledValue key={el}>{el}</StyledValue>)
  } else {
    Component = <StyledValue>{element.value}</StyledValue>
  }
} else {
  if (element.type === 'checkbox') {
    Component = element.options.filter(elem => elem.value).map(o => <StyledValue key={o.name}>{o.label}</StyledValue>)
  }
}
return Component */
  if (element.type === 'checkbox') {
    return element.options.filter(elem => elem.value).map(o => <StyledValue key={o.name}>{o.label}</StyledValue>)
  }
  if (typeof (element.value) === 'object') {
    return element.value.map(el => <StyledValue key={el}>{el}</StyledValue>)
  }
  return <StyledValue>{element.value}</StyledValue>
}

const Fields = ({ data }) => {
  return (
    <ul className='list-group list-group-flush text-left'>
      {
        data.map((elem) => {
          return ((elem.value || (elem.type === 'checkbox' && elem.options.find(o => o.value))) &&
            <li key={elem.name} className='list-group-item d-flex justify-content-between px-0'>
              <StyledType>{elem.label}:</StyledType>
              <div className='d-flex flex-column flex-md-row flex-lg-column'>
                {
                  <Data element={elem} />
                }
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

const Order = ({ data }) => (
  <>
    <Fields data={data} />
    <div className='card-footer text-left d-flex justify-content-between' style={{ backgroundColor: COLOR.mediumGray }}>
      <h5 className='mb-0 font-weight-bold'>Total:</h5>
      <h5 className='mb-0 font-weight-bold' />
    </div>
  </>
)
export default OrderCard
