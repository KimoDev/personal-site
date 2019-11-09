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
          <p>An insight of what i'm currently working on or projects i've worked on in the past.
          </p>
        </div>
        <div className={styles.projectRow}>
          <ProjectContainer title={"Weather Application"} type={"Web Application"}/>
          <ProjectContainer title={"The FreshDev"} type={"E-commerce store"}/>
        </div>
        <div className={styles.projectRow}>
          <ProjectContainer title={"IRIS"} type={"Mobile Application"}/>
          <ProjectContainer title={"Another project"} type={"Software Application"}/>
        </div>
        <div className={styles.footer}>
        
      </div>
      </div>
      
    </div>
  )
}

export default Project;
