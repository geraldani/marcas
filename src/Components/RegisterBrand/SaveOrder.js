import React, { useState } from 'react'
import OrderDetail from '../../Views/RegisterBrand/order-detail/OrderDetail'
import { LocalStorage, ROUTES } from '../../utils/constants'
import { history } from '../../helpers/history'
// para armar el cuerpo del json a ser enviado a guardarse a partir de los datos guardados en el estado
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

const SaveOrder = (props) => {
  const state = props.location.state // el estado pasapo por props en el history
  const [loading, setLoading] = useState(false)

  const handleClickBack = (e) => {
    e.preventDefault()
    props.history.push({
      pathname: ROUTES.registerBrand,
      state: { step: 5, data: state }
    })
  }

  const handleClickFinish = async (e) => {
    e.preventDefault()
    const data = getData(state)
    window.localStorage.setItem(LocalStorage.registerBrand, JSON.stringify(data))
    history.push(ROUTES.finishRegister)
  }

  const orderProps = { state, handleClickBack, handleClickFinish, loading }
  return <OrderDetail {...orderProps} />
}

export default SaveOrder
