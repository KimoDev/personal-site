import React from 'react';
import Overlay from '../components/Overlay';
import FooterOverlay from '../components/FooterOverlay';
import Header from '../components/Header';
import overlayStyles from '../styles/index.module.scss';


const RenderOverlay = ({nav, toggleNav}) => {
  return (
      <div className={overlayStyles.main} >
        <div className={overlayStyles.container}>
          <Header 
          navClicked={() => toggleNav(!nav)} 
          icon={require('../images/icons/close-icon.svg')}/>
          <Overlay nav={nav}/>
          <div className={overlayStyles.footer}>
  <FooterOverlay /> 
          </div>
        </div>
      </div>
    
  );
}

export default RenderOverlay;