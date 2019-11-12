import React from 'react'
import { COLOR } from '../../constants'
import { StyledDescription, StyledCheckbox, StyledCheckIcon, StyledCard } from './styles'

const RadioButttons = (props) => {
  const { value, label, description, name, onChange, children, className, checked, defaultCheked } = props

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
    <div className='d-flex justify-content-end flex-column'>
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
      {children}
    </div>
  )
}

export default RadioButttons
