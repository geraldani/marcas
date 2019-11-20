import React from 'react'
import Logo from '../logo/Logo'
import { footer } from '../../../data.json'
import { StyledCopyright, StyledLink } from './styles'

const Footer = () => {
  return (
    <footer className='border-top'>
      <div className='row mx-5 pt-3 justify-content-md-between justify-content-center flex-md-row flex-column'>
        <Logo className='mx-auto mx-md-0 mb-2' />
        <div className='d-flex justify-content-end align-items-center flex-md-row flex-column'>
          {
            footer.map(faq => {
              return (
                <StyledLink key={faq.name} to={faq.url}>
                  {faq.name}
                </StyledLink>
              )
            })
          }
        </div>
      </div>
      <div className='mx-5 pb-3'>
        <StyledCopyright>2019 Sitebrand, Inc. All rights reserved</StyledCopyright>
      </div>
    </footer>
  )
}

export default Footer
