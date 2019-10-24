import React from 'react'
import Button from './Button'
import { IoIosArrowDropright as Arrow } from 'react-icons/io'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import COLORS from './colors'

const CardInfo = (props) => {
  const pair = props.index % 2 === 0
  const classes = {
    justify: pair ? 'justify-content-start' : 'justify-content-end',
    align: pair ? 'align-items-md-start' : 'align-items-md-end',
    text: pair ? 'text-md-left' : 'text-md-right',
    margin: pair ? 'margin-left: 2rem' : 'margin-right: 2rem'
  }

  return (
    <div className={`row mx-0 mb-4 ${classes.justify}`}>
      <div className='col-12 col-md-10 col-xl-8 mb-4'>
        <div className='card shadow-medium'>
          <div className={`card-body d-flex flex-column align-items-center ${classes.align}`}>
            <h4 className='card-title mb-4' style={{ color: '#4a4a4a' }}>{props.title}</h4>
            <p className={`card-subtitle mb-4 text-muted text-normal text-justify ${classes.text}`}>{props.description}</p>
            <div className='d-flex align-items-center flex-column flex-md-row'>
              {
                !pair &&
                  <StyledLink to={`info${props.id}`} margin={classes.margin}>
                    {props.buttonInfo}.
                  </StyledLink>
              }
              <Button title={props.buttonTitle} link={props.link}>
                <Arrow size='1.6em' className='ml-2' />
              </Button>
              {
                pair &&
                  <StyledLink to={`info${props.id}`} margin={classes.margin}>
                    {props.buttonInfo}.
                  </StyledLink>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardInfo

const StyledLink = styled(Link)`
  font-style: italic;
  color: ${COLORS.purple};
  font-weight: 500;
  ${props => props.margin};
  transition: all 200ms;
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
  &:hover{
    text-decoration: none;
    color: ${COLORS.purple};
    opacity: 0.6;
  }
`
