import React from 'react';

import '../styles/header.scss';
import logo from '../images/kimo-logo.png';

const Header = (props) => {
  
    return (
      <div className="header">
        
          <img src={logo} alt="Logo" className="logo"/>
          
            <img src={props.icon} alt="menu" className="menu" onClick={props.navClicked} />
          
          
        
      </div>
    )  
}

export default Header;