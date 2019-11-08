import React, { useState, useEffect } from 'react'
import { ROUTES } from '../../Views/common/constants'
import RegisterView from '../../Views/RegisterBrand/register/RegisterView'
import useForm from '../../hooks/useForm'

const setViewUp = () => window.scroll(0, 0) // pone el viewport al principio de la pagina

const Register = (props) => {
  const TOTAL_STEPS = 5
  const [step, setStep] = useState(2)
  const { state, handleChange } = useForm()

  // Atualizar los demas paises en base si cambio el pais principal
  /*  useEffect(() => {
      setCountryAttorney(country)
      setCountryBrand(country)
    }, [country])*/

  const clickNext = (e) => {
    e.preventDefault()
    setViewUp()
    if (step === TOTAL_STEPS) {
      props.history.push(ROUTES.orderDetail)
    } else {
      /*  if (!country) {
          setCountryError(true)
        } else { */
      setStep(step + 1)
      // }
    }
  }

  const clickBack = (e) => {
    e.preventDefault()
    setViewUp()
    setStep(step - 1)
  }

  console.log('estado ', state)

  return (
    <RegisterView
      step={step}
      totalSteps={TOTAL_STEPS}
      value={state}
      onChange={handleChange}
      handleClickBack={clickBack}
      handleClickNext={clickNext}
    />
  )
}

export default Register
