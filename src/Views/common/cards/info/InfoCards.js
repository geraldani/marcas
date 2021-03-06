import React from 'react'
import { IoIosArrowDropright as ArrowIcon } from 'react-icons/io'
import { StyledButton } from './styles'
import { COLOR, ROUTES } from '../../../../utils/constants'
import Button from '../../buttons/Button'

const CardInfo = (props) => {
  const pair = props.index % 2 === 0
  const classes = {
    justify: pair ? 'justify-content-start' : 'justify-content-end',
    align: pair ? 'align-items-md-start' : 'align-items-md-end',
    text: pair ? 'text-md-left' : 'text-md-right',
    margin: pair ? 'margin-left: 2rem' : 'margin-right: 2rem'
  }

  const MoreInfoButton = () => (
    <Button
      title={props.buttonInfo + '.'}
      link={`${ROUTES.moreInfo}/${props.id}`}
      styled='simple-primary'
      style={{ fontSize: '1.08rem', fontStyle: 'italic' }}
    />
  )

  return (
    <div className={`row mx-0 mb-3 my-md-5 ${classes.justify}`}>
      <div className='col-12 col-md-10 col-xl-8'>
        <div className='card shadow-medium'>
          <div className={`card-body d-flex flex-column align-items-center ${classes.align}`}>
            <h4 className='card-title mb-4 text-center' style={{ color: COLOR.darkGrey }}>
              {props.title}
            </h4>
            <p className={`card-subtitle mb-4 text-muted text-normal text-justify ${classes.text}`}>
              {props.description}
            </p>
            <div className={`d-flex align-items-center flex-column flex-md-row w-100 ${classes.justify}`}>
              {!pair && <MoreInfoButton />}
              <StyledButton title={props.buttonTitle} link={props.link}>
                <ArrowIcon size='1.6em' className='ml-2' />
              </StyledButton>
              {pair && <MoreInfoButton />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardInfo
