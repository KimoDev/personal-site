import React, { useState } from "react"

import Header from '../components/Header';
import Social from '../components/Social';
import RenderOverlay from '../components/RenderOverlay';

import styles from '../styles/index.module.scss';
import '../styles/global.scss';

const HomePage = () => {
  const [nav, toggleNav] = useState(false);
  
  
  return (
    <div>
    {nav ? <RenderOverlay nav toggleNav={toggleNav} /> : null }
      <div className={styles.container}>
      
      <Header 
      navClicked={() => toggleNav(!nav)} 
      icon={require('../images/icons/burger-menu.svg')}/>
      
      <div className={styles.wrapper}>

        <div className={styles.contentLeft} >
        
          <h1 className={styles.title}>Hi, I’m Kimo.I'm A Developer, Designer & Content Creator</h1>
          <p className={styles.intro}>A 21 year old Computer Science Student, currently in my 
          final year studying at the University of Kent.</p>
          <p className={styles.intro}>As a self-taught individual for 7+ years, I have strengthen
          my skills and developed interests over a wide range of 
          areas. 
            
          </p>
          <div className="btn-group">
            <button className="projects-btn">View Projects</button>
            <button className="projects-btn--alt">About Me</button>
          </div>
          
          
        </div>

        <div className={styles.contentRight}>
          {/*<img src={require('../assets/kimodev.jpg')} alt="Kimo Dev " className="frontImg"/> */}
          <div className={styles.frontImg}></div>
        </div>

        </div>
      <div className={styles.footer}>
          <Social />
        </div>
        
    </div>

    </div>
    
  );
}

export default HomePage;