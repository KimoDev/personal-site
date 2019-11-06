import React, { useState } from 'react'

import Header from '../components/Header';
import ProjectContainer from '../components/ProjectContainer';

import styles from '../styles/projects.scss';

const project = () => {
  // const [nav, toggleNav] = useState(false);

  return (
    <div className={styles.container}>
      <Header 
      // navClicked={() => toggleNav(!nav)} 
      icon={require('../images/icons/burger-menu.svg')}/>
      <h1>Projects I've been working on</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Cum fugit aliquid quaerat voluptatum nulla in facere laudantium 
      reiciendis natus quia voluptates consequuntur cupiditate expedita, 
      nam aperiam illum, perspiciatis cumque. Maxime?
      </p>
      <div className="project-row">
        <ProjectContainer />
        <ProjectContainer />
      </div>
      
      </div>
  )
}

export default project
