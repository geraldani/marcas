import styled from 'styled-components'
import imageBackground from '../../../assets/img/about.jpg'

export const StyledAboutContainer = styled.div`
  background-image: url(${imageBackground});
  z-index: -2;
  background-size: cover;
  position: relative;
  background-position-y: 0;
  background-position-x: 50%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  &:after{
    content: '';
    background-color: rgba(0, 0, 0, .4);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  @media (max-width: 768px) {
    background-position-x: 40%;
  }
`
