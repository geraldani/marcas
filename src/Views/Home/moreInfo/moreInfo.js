import React from 'react'
import { MainContainer } from '../../styles/GlobalStyles'
import RegisterBrand from '../register/RegisterBrand'
import { help } from '../../../data.js'
import FormCard from '../../common/miniForm'
import Footer from '../../common/footer/Footer'
import { IoIosCheckmark as IconCheck, IoIosArrowRoundBack as IconBack } from 'react-icons/io'
import { StyledContainer } from './styles'
import { COLOR } from '../../../utils/constants'
import { setViewUp } from '../../../utils/utils'
import Button from '../../common/buttons/Button'
import { useHeader } from '../../../hooks/useHeader'

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
  const [container, header] = useHeader()
  setViewUp()
  return (
    <MainContainer ref={container} header={header}>
      <RegisterBrand title={elem.title} subtitle={elem.description}/>
      <div className='row m-0'>
        <div className='col-12 col-md-7 p-5'>
          <Button
            title='Volver'
            onClick={() => props.history.goBack()}
            styled='simple-primary'
            className='px-1 py-1'
            style={{ fontSize: '0.97rem' }}
            childrenFirst
          >
            <IconBack size='25px'/>
          </Button>
          {
            elem.info.map(detailInfo => (
              <StyledContainer key={detailInfo.title} isEnum={detailInfo.isEnum}>
                <h3>{detailInfo.title}</h3>
                {
                  detailInfo.text.map(text => (
                    <p key={text}>
                      {
                        detailInfo.isEnum && <IconCheck size='30px' color={COLOR.primary}/>
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
          <FormCard
            data={inputData}
            title='Quiero que se contacten conmigo'
            buttonName='Aceptar'
            className='shadow-card'
          />
        </div>
      </div>
      <Footer/>
    </MainContainer>
  )
}

export default MoreInfo
