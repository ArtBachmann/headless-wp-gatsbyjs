import React from 'react'

import { FooterWrapper } from './styles/FooterStyles'

const Footer = () => (
  <FooterWrapper>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h2 className='whiteText'></h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <p className='tango-contact'>
            <a href="mailto:bachmann.art@gmail.com">
              @Art Bachmann
            </a>
          </p>
        </div>
        <div className='col-md-4'>
          <p className='tango-contact'>
            <a href="mailto:bachmann.art@gmail.com">
              @Art Bachmann
            </a>
          </p>
        </div>
        <div className='col-md-4'>
          <p className='tango-contact'>
            <a href="mailto:bachmann.art@gmail.com">
              @Art Bachmann
            </a>
          </p>
        </div>
      </div>
    </div>
  </FooterWrapper>
)

export default Footer
