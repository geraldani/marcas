import React, { useState, useEffect } from 'react'
import OrderCard from '../utilities/OrderCard'
import CircleSteps from '../utilities/CircleSteps'
import CardSteps from '../utilities/CardSteps'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import StepFive from './StepFive'
import Button from '../utilities/Button'

export const useInputChange = () => {
  const [input, setInput] = useState({})

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  return [input, handleInputChange]
}

const Register = () => {
  const TOTAL_STEPS = 5
  const [step, setStep] = useState(5)
  const [country, setCountry] = useState('')
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
    if (step === TOTAL_STEPS) {
      window.alert('termine el asunto')
    } else {
      setStep(step + 1)
    }
  }

  const clickBack = (e) => {
    e.preventDefault()
    setStep(step - 1)
  }

  // botones de navegacion para avanaza o retroceder en el formulario
  const ButtonsNavigation = () => (
    <div
      className={`border-top mt-5 py-3 px-4 d-flex ${step === 1 ? 'justify-content-end' : 'justify-content-between'}`}
    >
      {
        step > 1 &&
          <Button
            title='Volver'
            className='px-5'
            styled='outline-purple'
            onClick={clickBack}
          />
      }
      <Button
        title={`${step === TOTAL_STEPS ? 'Finalizar' : 'Continuar'} `}
        className='px-5'
        onClick={clickNext}
      />
    </div>
  )

  const Steps = () => {
    switch (step) {
      case 1:
        return <StepOne country={country} setCountry={setCountry} />
      case 2:
        return <StepTwo country={countryAttorney} setCountry={setCountryAttorney} />
      case 3:
        return <StepThree />
      case 4:
        return <StepFour country={countryBrand} setCountry={setCountryBrand} />
      case 5:
        return <StepFive />
      default:
        return <div>paso invalido</div>
    }
  }

  return (
    <section className='margin-header mb-5'>
      <div className='container-fluid pt-5 px-5'>
        <div className='row justify-content-end'>

          {/* Circulos del paso actual y totales */}
          <div className='col-12 mb-4'>
            <CircleSteps actualStep={step} totalSteps={TOTAL_STEPS} />
          </div>

          {/* formulario principal */}
          <div className='col-9'>
            <CardSteps title={`Paso ${step}`}>
              {/* Formulario actual dependiendo de que paso este */}
              <Steps />
              {/* botones de navegacion */}
              <ButtonsNavigation />
            </CardSteps>
          </div>

          {/* Detalle de la orden Card */}
          <div className='col-3'>
            <OrderCard data={dataForm} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
