import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import citatImg from '../../images/tango_citat.svg'
import { CitatWrapper } from './styles/CitatStyles'

const Tsitaat = () => {
  const data = useStaticQuery(graphql`
    query{
   wordpressPage(wordpress_id: {eq: 445}) {
    acf {
      author
      text
    }
  }
}
  `)

  return (
    <CitatWrapper>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <img src={citatImg} alt='quote' />
            <h6>{data.wordpressPage.acf.text}</h6>
            {data.wordpressPage.acf.author}
          </div>
        </div>
      </div>
    </CitatWrapper>
  )
}

export default Tsitaat