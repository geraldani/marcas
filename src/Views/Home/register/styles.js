import styled, { css } from 'styled-components'
import background from '../../../assets/img/mg.jpg'
import { COLOR, SCREEN } from '../../common/constants'

export const StyledContainer = styled.section`
  background-image: url(${background});
  background-position: 50% 0;
  padding-top: ${props => props.buttons ? '200px' : '100px'};
  padding-bottom: ${props => props.buttons ? '200px' : '100px'};
  position: relative;
  opacity: .85;
  color: ${COLOR.white};
  text-align: center;
  :after{
    content: '';
    background-color: rgba(0, 0, 0, .4);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  & h2{
    font-size: 1.9rem;
    margin-bottom: 0;
    text-transform: ${props => props.buttons ? 'uppercase' : 'none'};
  }
  & p{
    font-size: 1.15rem;
    margin-left: 15em;
    margin-right: 15em;
    margin-top: 0.6em;
  }
  @media (max-width: ${SCREEN.md}px){
    padding-top: 100px;
    padding-bottom: 100px;
    background-position: 70% 50%;
    & p{
      margin-left: 1em;
      margin-right: 1em;
    }
  }
`
