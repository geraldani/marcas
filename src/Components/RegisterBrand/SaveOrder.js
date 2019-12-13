import React, { useState } from 'react'
import OrderDetail from '../../Views/RegisterBrand/order-detail/OrderDetail'
import { ROUTES } from '../../utils/constants'
import { connect } from 'react-redux'
import { addRegisterBrand } from '../../redux/actions'

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
    props.dispatch(addRegisterBrand(data))
    props.history.push(ROUTES.finishRegister)

    /*  const url = 'https://marcas-api-test.herokuapp.com/paperwork/new'
     const fetchBody = {
       method: 'POST',
       body: JSON.stringify(data),
       headers: { 'Content-Type': 'application/json' }
     }

     try       /* setLoading(true)
        const res = await window.fetch(url, fetchBody)
        const response = await res.json()
        console.log('la respuesta fue ', response)
        setLoading(false)
       console.log(fetchBody)
        props.history.push(ROUTES.finishRegister)

    } catch (e) {
      console.log('Ocurrio un error ', e.message)
    } */
  }

  const orderProps = { state, handleClickBack, handleClickFinish, loading }
  return <OrderDetail {...orderProps} />
}

const mapStateToProps = (state) => {
  if (state.registerBrandData) {
    return { dataRegister: state.registerBrandData }
  } else {
    return {
      dataRegister: {}
    }
  }
}

export default connect(mapStateToProps)(SaveOrder)
