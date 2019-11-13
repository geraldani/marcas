import React, { useState } from 'react'
import { ROUTES } from '../../Views/common/constants'
import RegisterView from '../../Views/RegisterBrand/register/RegisterView'
import useForm from '../../hooks/useForm'
import { Model } from './model'

const setViewUp = () => window.scroll(0, 0) // pone el viewport al principio de la pagina

const Register = (props) => {
  const TOTAL_STEPS = 5
  const [step, setStep] = useState(1)
  const { state, handleChange, removeCountry } = useForm(Model)

  const clickNext = (e) => {
    e.preventDefault()
    setViewUp()
    if (step === TOTAL_STEPS) {
      props.history.push({
        pathname: ROUTES.orderDetail,
        state: state
      })
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
      state={state}
      onChange={handleChange}
      handleClickBack={clickBack}
      handleClickNext={clickNext}
      removeCountry={removeCountry}
    />
  )
}

export default Register
