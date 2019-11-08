import React, { useState } from 'react'

import Header from '../components/Header';
import RenderOverlay from '../components/RenderOverlay';

import ProjectContainer from '../components/ProjectContainer';

import styles from '../styles/projects.module.scss';


const Project = () => {
  const [nav, toggleNav] = useState(false);

  return (
    <div className={styles.root}>
    
    {nav ? <RenderOverlay nav toggleNav={toggleNav}/> : null }
      <div className={styles.container}>
      
        <Header 
        navClicked={() => toggleNav(!nav)} 
        icon={require('../images/icons/burger-menu.svg')}/>
        <div className={styles.titleWrapper}>
          <h1>Projects I've been working on</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Cum fugit aliquid quaerat voluptatum nulla in facere laudantium 
          reiciendis natus quia voluptates consequuntur cupiditate expedita, 
          nam aperiam illum, perspiciatis cumque. Maxime?
          </p>
        </div>
        <div className={styles.projectRow}>
          <ProjectContainer />
          <ProjectContainer />
        </div>
        <div className={styles.projectRow}>
          <ProjectContainer />
          <ProjectContainer />
        </div>
        <div className={styles.footer}>
        
      </div>
      </div>
      
    </div>
  )
}

export default Project;
