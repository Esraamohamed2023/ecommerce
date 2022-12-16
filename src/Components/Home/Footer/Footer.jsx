import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faFacebookF, faTwitter,faBehance,faGoogle, faYoutube, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
  return (
    <div className='footer'>
<ul>
<li><a href='#'>Register</a></li>
<li><a href='#'>Forum</a></li>
<li><a href='#'>Affiliate</a></li>
<li><a href='#'>FAQ</a></li>
</ul>
<ul className='icon'>
<li><a href='#'><FontAwesomeIcon icon={faFacebookF} /></a></li>
<li><a href='#'><FontAwesomeIcon icon={faTwitter} /></a></li>
<li><a href='#'><FontAwesomeIcon icon={faYoutube} /></a></li>
<li><a href='#'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
<li><a href='#'><FontAwesomeIcon icon={faInstagram} /></a></li>

</ul>
<div className='fin'>© 2021. Foodera. All rights reserved.</div>


</div>
  )
}
