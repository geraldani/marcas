import styled from 'styled-components'
import background from '../../../assets/img/mg.jpg'
import { COLOR } from '../../common/constants'

export const StyledContainer = styled.div`
  background-image: url(${background});
  background-position: 50% 0;
  padding-top: 200px;
  padding-bottom: 200px;
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
  }
  & p{
    font-size: 1.15rem;
  }
  @media (max-width: 768px){
    padding-top: 100px;
    padding-bottom: 100px;
    background-position: 70% 50%;
  }
`
