import React from 'react'
import Logo from './utilities/Logo'
import { Link } from 'react-router-dom'
import { footer } from '../data.json'
import styled from 'styled-components'
import COLORS from './utilities/colors'

const Footer = () => {
  return (
    <footer>
      <div className='row mx-5 pt-3 justify-content-md-between justify-content-center flex-md-row flex-column'>
        <Logo className='mx-auto mx-md-0 mb-2' />
        <div className='d-flex justify-content-end align-items-center flex-md-row flex-column'>
          {
            footer.map(faq => (
              <Styles.Link key={faq} to='/'>
                {faq}
              </Styles.Link>
            ))
          }
        </div>
      </div>
      <div className='mx-5'>
        <Styles.p>2019 Sitebrand, Inc. All rights reserved</Styles.p>
      </div>
    </footer>
  )
}

export default Footer

const Styles = {
  p: styled.p`
    color: ${COLORS.grey};
    font-weight: normal;
    font-size: .8rem;
    margin-bottom: 0;
    margin-top: 8px;
    @media (max-width: 770px){
      text-align: center;
      margin-bottom: 1rem;
    }
`,
  Link: styled(Link)`
    color: ${COLORS.darkGrey};
    font-size: .8rem;
    &:hover{
      text-decoration: none;
      color: ${COLORS.darkGrey};
      opacity: .8;
    }
    &:not(:last-child){
      margin-right: 1.5em
    }
    @media (max-width: 728px){
      margin-right: 0!important;
    }
`
}
