import React from 'react'
import Header from '../../common/header/Header'
import RegisterBrand from '../register/RegisterBrand'
import { data } from '../../../data.js'
import LoginCard from '../../common/login'
import Footer from '../../common/footer/Footer'
import { IoIosCheckmark as Check } from 'react-icons/io'
import { StyledContainer } from './styles'
import { COLOR } from '../../../utils/constants'
import { setViewUp } from '../../../utils'

const { help } = data

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
          {
            elem.info.map(detailInfo => (
              <StyledContainer key={detailInfo.title} isEnum={detailInfo.isEnum}>
                <h3>{detailInfo.title}</h3>
                {
                  detailInfo.text.map(text => (
                    <p key={text}>
                      {
                        detailInfo.isEnum && <Check size='30px' color={COLOR.purple} />
                      }
                      {text}
                    </p>
                  ))
                }
              </StyledContainer>
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
