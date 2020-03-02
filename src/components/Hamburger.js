import React from 'react'

import { HamburgerButton } from './styles/HamburgerStyles'
import HamburgerHeart from '../images/tango_heart_hamburger.svg'

const Hamburger = ({ handleOverlayMenu }) => (
  <HamburgerButton onClick={handleOverlayMenu} tabIndex='0'>
    <img src={HamburgerHeart} alt="l-hamburger" />
  </HamburgerButton>
)

export default Hamburger
