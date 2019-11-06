import React, { useState, useEffect } from 'react'
import { ROUTES } from '../../Views/common/constants'
import RegisterView from '../../Views/RegisterBrand/register/RegisterView'

const Register = (props) => {
  const TOTAL_STEPS = 5
  const [step, setStep] = useState(1)
  const [country, setCountry] = useState('')
  const [countryError, setCountryError] = useState(false)
  const [countryAttorney, setCountryAttorney] = useState('')
  const [countryBrand, setCountryBrand] = useState('')
  const [dataForm, setDataForm] = useState(null)

  // Atualizar los demas paises en base si cambio el pais principal
  useEffect(() => {
    setCountryAttorney(country)
    setCountryBrand(country)
  }, [country])

  const clickNext = (e) => {
    e.preventDefault()
    window.scroll(0, 0) // pone el viewport al principio de la pagina
    if (step === TOTAL_STEPS) {
      props.history.push(ROUTES.orderDetail)
    } else {
      if (!country) {
        setCountryError(!countryError)
      } else {
        setStep(step + 1)
      }
    }
  }

  const clickBack = (e) => {
    e.preventDefault()
    setStep(step - 1)
  }

  return (
    <RegisterView
      step={step}
      country={country}
      setCountry={setCountry}
      countryError={countryError}
      setCountryError={setCountryError}
      countryAttorney={countryAttorney}
      setCountryAttorney={setCountryAttorney}
      countryBrand={countryBrand}
      setCountryBrand={setCountryBrand}
      totalSteps={TOTAL_STEPS}
      handleClickNext={clickNext}
      handleClickBack={clickBack}
      dataForm={dataForm}
    />
  )
}

export default Register

/* export const useInputChange = () => {
  const [input, setInput] = useState({})

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  return [input, handleInputChange]
} */
