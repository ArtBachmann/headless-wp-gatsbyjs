import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import CTA from './CTA'



const CTAImages = () => {
  const {
    cta: { acf: cta },
  } = useStaticQuery(graphql`
    fragment ctaImage on wordpress__wp_media {
      localFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }


  query {
  cta: wordpressPage(wordpress_id: {eq: 445}) {
    acf {
      cta_1_text
      cta_2_text
      cta_3_text
      cta_1_link
      cta_2_link
      cta_3_link
      cta_1_image {
        ...ctaImage
      }
      cta_2_image {
         ...ctaImage
      }
      cta_3_image {
         ...ctaImage
      }
    }
  }
}
  `)

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <CTA
              image={cta.cta_1_image.localFile.childImageSharp.fluid}
              link={cta.cta_1_link}
              text={cta.cta_1_text}
            />
          </div>
          <div className='col-md-4'>
            <CTA
              image={cta.cta_2_image.localFile.childImageSharp.fluid}
              link={cta.cta_2_link}
              text={cta.cta_2_text}
            />
          </div>
          <div className='col-md-4'>
            <CTA
              image={cta.cta_3_image.localFile.childImageSharp.fluid}
              link={cta.cta_3_link}
              text={cta.cta_3_text}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CTAImages