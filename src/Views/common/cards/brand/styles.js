import styled from 'styled-components'
import { COLOR, SCREEN } from '../../../../utils/constants'
import { IoIosCheckmarkCircle as CheckIcon } from 'react-icons/io'

const StyledContainer = styled.div`
  border: solid 3px ${COLOR.grey};
  border-bottom-color: ${COLOR.primary};
  border-radius: 5px;
  height: 165px;
  position: relative;
`
const StyledNumber = styled.h4`
  color: ${COLOR.primary};
  font-size: 3.1rem;
  margin-top: 2rem;
  text-align: center;
  margin-bottom: 0;
  @media (min-width: ${SCREEN.md}px) and (max-width: ${SCREEN.lg}px){
      font-size: 2.1rem;
  }
`
const StyledDescription = styled.p`
  text-align: center;
  color: ${COLOR.textColor};
  font-weight: normal;
  line-height: 1;
`
const StyledCheckIcon = styled(CheckIcon)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto 10px auto;
  color: ${COLOR.primary};
`

export { StyledContainer, StyledCheckIcon, StyledDescription, StyledNumber }
