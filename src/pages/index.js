import React, { useState } from "react"
import {useSpring, animated} from 'react-spring'

import Header from '../components/Header';
import Social from '../components/Social';
import Overlay from '../components/Overlay';
import FooterOverlay from '../components/FooterOverlay';
import Alert from '../components/Alert';


import '../styles/index.scss';
import '../styles/global.scss';

const HomePage = () => {
  const [nav, toggleNav] = useState(false);
  const fade = useSpring({
    opacity: nav ? 0.95 : 0
  });

  const renderOverlay = () => {
    return (
      
        <animated.div className="main" style={fade}>
        <div className="container">
        <Header 
        navClicked={() => toggleNav(!nav)} 
        icon={require('../images/icons/close-icon.svg')}/>
            <Overlay nav={nav}/>
        <div className="footer">
          <FooterOverlay />
        </div>
          </div>
        </animated.div>
      
    );
  }
  
  return (
    <div>
    {nav ? renderOverlay() : null }
      <Alert Message="Work in Progress" />
      <div className="container">
      
      <Header 
      navClicked={() => toggleNav(!nav)} 
      icon={require('../images/icons/burger-menu.svg')}/>
      
      <div className="wrapper">

        <div className="content-left" >
        
          <h1 className="title">Hi, I’m Kimo.I'm A Developer, Designer & Content Creator</h1>
          <p className="intro">A 21 year old Computer Science Student, currently in my 
          final year studying at the University of Kent.</p>
          <p className="intro">As a self-taught individual for 7+ years, I have strengthen
          my skills and developed interests over a wide range of 
          areas. 
            
          </p>
          <div className="btn-group">
            <button className="projects-btn">View Projects</button>
            <button className="projects-btn--alt">About Me</button>
          </div>
          
          
        </div>

        <div className="content-right">
          {/*<img src={require('../assets/kimodev.jpg')} alt="Kimo Dev " className="frontImg"/> */}
          <div className="frontImg"></div>
        </div>

        </div>
        <div className="footer">
          <Social />
        </div>
        
    </div>
    
   
    
    </div>
    
  );
}

export default HomePage;