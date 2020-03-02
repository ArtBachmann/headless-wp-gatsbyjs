import React from 'react'
import SEO from '../components/seo'

import Layout from '../components/layout'
import HeroSlider from '../components/index/HeroSlider'
import CTAImages from '../components/index/CTAImages'
import LatestTrends from '../components/index/LatestTrends'
import Tsitaat from '../components/index/Tsitaat'
import About from '../components/index/About'



const index = () => (
  <Layout>
    <SEO title='Home' keywords={['lammaslamppi', 'vantaa']} />
    <HeroSlider />
    <CTAImages />
    <LatestTrends />
    <Tsitaat />
    <About />
  </Layout>
)

export default index
