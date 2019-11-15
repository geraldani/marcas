import React from 'react'
import Header from '../../common/header/Header'
import RegisterBrand from '../register/RegisterBrand'
import { help } from '../../../data.json'
import LoginCard from '../../common/login'
import Footer from '../../common/footer/Footer'
import { IoIosCheckmark as Check } from 'react-icons/io'
import { StyledText } from './styles'
import { COLOR } from '../../common/constants'
import { setViewUp } from '../../../Components/utils'

const inputData = [
  {
    name: 'Nombre',
    type: 'text'
  },
  {
    name: 'Email',
    type: 'email'
  }
]

const MoreInfo = (props) => {
  const elem = help.brands.find(el => el.id === props.match.params.name)
  setViewUp()
  return (
    <div className='margin-header'>
      <Header showMenu />
      <RegisterBrand title={elem.title} subtitle={elem.description} />
      <div className='row m-0'>
        <div className='col-12 col-md-7 p-5'>
          <h3>Lorem ipsun has been the industry's standard dummy</h3>
          <StyledText className='text-left mt-4'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries.
          </StyledText>
          {

            [...Array(5)].map(text => (
              <StyledText key={text}>
                <Check size='35px' color={COLOR.purple} />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </StyledText>
            ))
          }
        </div>

        <div className='col-12 col-md-5 px-5 my-5'>
          <LoginCard
            data={inputData}
            title='Quiero que se contacten conmigo'
            buttonName='Aceptar'
            className='shadow-card'
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MoreInfo
