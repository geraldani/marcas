import React from 'react'
import OrderCard from '../utilities/OrderCard'
import CircleSteps from '../utilities/CircleSteps'
import CardSteps from '../utilities/CardSteps'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import StepFive from './StepFive'

const Register = () => {
  const totalSteps = 5
  const step = 2
  return (
    <section className='margin-header'>
      <div className='container-fluid pt-5 px-5'>
        <div className='row justify-content-end'>
          <div className='col-12 mb-4'>
            <CircleSteps actualStep={step} totalSteps={totalSteps} />
          </div>
          <div className='col-9'>
            <CardSteps title={`Paso ${step}`}>
              <Steps actualStep={step} />
            </CardSteps>
          </div>
          <div className='col-3'>
            <OrderCard />
          </div>
        </div>
      </div>
    </section>
  )
}

const Steps = ({ actualStep }) => {
  switch (actualStep) {
    case 1: return <StepOne />
    case 2: return <StepTwo />
    case 3: return <StepThree />
    case 4: return <StepFour />
    case 5: return <StepFive />
    default: return <div>paso invalido</div>
  }
}
export default Register
