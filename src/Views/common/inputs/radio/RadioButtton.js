import React from 'react'
import { COLOR } from '../../../../utils/constants'
import { StyledDescription, StyledCheckbox, StyledCheckIcon, StyledCard } from './styles'

const RadioButttons = (props) => {
  const { value, label, description, name, onChange, children, className, checked, defaultCheked, moreInfo } = props

  //TODO cambiar esta forma de aplicar estilos
  const changeColor = (e) => {
    e.currentTarget.parentNode.parentNode.childNodes.forEach(elem => {
      elem.firstChild.style.background = COLOR.white
      elem.firstChild.querySelector('p').style.color = COLOR.darkGrey
    })
    e.currentTarget.style.background = COLOR.lightGrey
    e.currentTarget.querySelector('p').style.color = COLOR.black
  }

  return (
    <div className='d-flex justify-content-end flex-column align-items-end'>
      {/* TODO como poner un solo checked al componente de estilos */}
      <StyledCard onClick={changeColor} className={className} checked={checked}>
        {/* input de tipo radio */}
        <StyledCheckbox type='radio' value={value} name={name} onChange={onChange} defaultChecked={defaultCheked} />
        <StyledCheckIcon />
        <div>
          {
            label && <h5>{label}</h5>
          }
          {
            description &&
              <StyledDescription checked={checked}>
                {description}
              </StyledDescription>
          }
        </div>
      </StyledCard>
      {/* el elemento children es para colocar algun texto o componente debajo del check */}
      {children}
    </div>
  )
}

export default RadioButttons
