import React from 'react';
import { Link } from 'gatsby';

import '../styles/header.scss';
import logo from '../images/kimo-logo.png';

const Header = (props) => {
  
    return (
      <div className="header" style={props.style}>
        
          <Link to='/'><img src={logo} alt="Logo" className="logo"/></Link>
          
            <img src={props.icon} alt="menu" className="menu" onClick={props.navClicked} />
          
          
        
      </div>
    )  
}

export default Header;