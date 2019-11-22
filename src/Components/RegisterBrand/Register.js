import React, { useState } from 'react'
import { ROUTES } from '../../Views/common/constants'
import RegisterView from '../../Views/RegisterBrand/register/RegisterView'
import useForm from '../../hooks/useForm'
import { setViewUp } from '../utils'
import { Model } from './model'

const Register = (props) => {
  const TOTAL_STEPS = 5
  const previousState = props.location.state // el estado pasapo por props en el history
  const [step, setStep] = useState(previousState ? previousState.step : 1)

  const clickNext = (e) => {
    // e.preventDefault()
    setViewUp()
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
  const clickBack = (e) => {
    e.preventDefault()
    setViewUp()
    setStep(step - 1)
  }

  const registerProps = {
    step,
    totalSteps: TOTAL_STEPS,
    state,
    onChange: handleChange,
    handleClickBack: clickBack,
    handleClickNext: nextStep,
    removeCountry,
    errors
  }

  return <RegisterView {...registerProps} />
}

export default Register
