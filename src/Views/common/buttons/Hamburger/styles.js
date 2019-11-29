import styled, { css } from 'styled-components'

const hamburgerpaddingx = 8
const hamburgerpaddingy = 8
const hamburgerlayerwidth = 30
const hamburgerlayerheight = 3
const hamburgerlayerspacing = 5
const hamburgerlayerborderradius = 8
const hamburgerhoveropacity = 0.5
const hamburgeractivehoveropacity = hamburgerhoveropacity
const hamburgerhoverusefilter = false
const hamburgerhoverfilter = 'opacity(50%) '
const hamburgeractivehoverfilter = hamburgerhoverfilter

const HamburgerInner = styled.div`
  display: block;
  top: 50%;
  margin-top: ${hamburgerlayerheight / -2}px;
  &,
  &::before,
  &::after {  
    width: ${props => props.width || hamburgerlayerwidth}px;
    height: ${hamburgerlayerheight}px;
    background-color: ${props => props.color};
    border-radius: ${hamburgerlayerborderradius}px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
    &::before,
    &::after {
    content: '';
    display: block;
  }
   &::before {
    top: ${(hamburgerlayerspacing + hamburgerlayerheight) * -1}px;
  }
  &::after {
    bottom: ${(hamburgerlayerspacing + hamburgerlayerheight) * -1}px;
  }
`

const HamburgerBox = styled.div`
  width: ${props => props.width || hamburgerlayerwidth}px;
  height: ${hamburgerlayerheight * 3 + hamburgerlayerspacing * 2}px;
  display: inline-block;
  position: relative;
`

const Hamburger = styled.div`
  padding: ${hamburgerpaddingy}px ${hamburgerpaddingx}px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  &:focus{
    outline: none;
  }
  &:hover {
    ${hamburgerhoverusefilter
  ? css`filter: ${hamburgerhoverfilter}`
  : css`opacity: ${hamburgerhoveropacity}`
}
  }
  ${props => props.active && css`
    &:hover {
      ${
  hamburgerhoverusefilter
    ? css`filter: ${hamburgeractivehoverfilter}`
    : css`opacity: ${hamburgeractivehoveropacity}`
}
    }
    ${HamburgerInner},
    ${HamburgerInner}::before,
    ${HamburgerInner}::after {
      background-color: ${props => props.color};
    }
  `}
`

const Spin = styled(Hamburger)`
  ${HamburgerInner}{
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    &::before {
      transition: top 0.1s 0.25s ease-in,
                  opacity 0.1s ease-in;
    }
    &::after {
      transition: bottom 0.1s 0.25s ease-in,
                  transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }
  ${props => props.active && css`
    ${HamburgerInner}{
      transform: rotate(225deg);
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      &::before {
        top: 0;
        opacity: 0;
        transition: top 0.1s ease-out,
                    opacity 0.1s 0.12s ease-out;
      }
      &::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.1s ease-out,
                    transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }  
  `}
`

export {
  HamburgerInner,
  HamburgerBox,
  Spin
}
