import React from 'react'

import ig from '../images/icons/instagram-alt.svg'
import twit from '../images/icons/twitter.svg'
import git from '../images/icons/github.svg'
import mail from '../images/icons/mail-icon.svg'

const FooterOverlay = () => {
  return (
    <div>
      <img src={ig} alt="instagram" className="social-icon"/>
      <img src={twit} alt="twitter" className="social-icon"/>
      <img src={git} alt="github" className="social-icon"/>
      <img src={mail} alt="email" className="social-icon"/>
    </div>
  )
}

export default FooterOverlay
