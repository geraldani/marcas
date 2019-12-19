import React, { useState, useEffect } from 'react'
import { ROUTES, ENDPOINTS } from '../../utils/constants'
import RegisterView from '../../Views/RegisterBrand/register/RegisterView'
import useForm from '../../hooks/useForm'
import { isEmptyObject, setViewUp, sortArray } from '../../utils/utils'
import { Model } from './model'

const Register = (props) => {
  const TOTAL_STEPS = 5
  let previousState = props.location.state // el estado pasapo por props en el history
  if (previousState) {
    if (previousState.from) {
      if (!previousState.from.state) {
        previousState = undefined
      }
    }
  }

  const [step, setStep] = useState(previousState ? previousState.step : 1)
  const [dataSearch, setDataSearch] = useState([])
  const [loading, setLoading] = useState(false)

  const clickNext = (e) => {
    if (e) e.preventDefault()
    // setViewUp()
    if (step === TOTAL_STEPS) {
      props.history.push({
        pathname: ROUTES.orderDetail,
        state: state
      })
    } else {
      setStep(step + 1)
    }
  }

  const { state, handleChange, removeCountry, nextStep, errors } = useForm(previousState ? previousState.data : Model, clickNext, step)

  useEffect(() => {
    // setViewUp()
  }, [])

  const searchClass = async () => {
    try {
      setLoading(true)
      const res = await window.fetch(ENDPOINTS.searchClass + state.productService.value)
      const response = await res.json()
      if (!isEmptyObject(response)) {
        const responseOrdened = sortArray(Object.keys(response), 'desc')
        const dataClases = []
        responseOrdened.forEach(e => {
          const obj = {}
          obj.title = 'Clase ' + response[e].number
          obj.description = response[e].possibleNames
          obj.name = response[e].name
          dataClases.push(obj)
        })
        setDataSearch(dataClases)
      } else {
        setDataSearch('Su búsqueda no coincide con ningún elemento')
      }
      setLoading(false)
    } catch (e) {
      setLoading(false)
      // setErrorFetch('Ocurrió un error al hacer la solicitud')
      console.log('Ocurrio un error ', e.message)
    }
  }

  const handleClickSearch = (e) => {
    if (e) e.preventDefault()
    searchClass()
  }

  const handleKeyDownSearch = (e) => {
    const code = e.keyCode || e.charCode
    if (code === 13) {
      e.preventDefault()
      searchClass()
    }
  }

  const clickBack = (e) => {
    e.preventDefault()
    // setViewUp()
    setStep(step - 1)
  }

  const registerProps = {
    step,
    totalSteps: TOTAL_STEPS,
    state,
    onChange: handleChange,
    handleClickBack: clickBack,
    handleClickNext: nextStep,
    handleClickSearch,
    handleKeyDownSearch,
    removeCountry,
    loading,
    dataSearch,
    errors
  }

  return <RegisterView {...registerProps} />
}

export default Register
