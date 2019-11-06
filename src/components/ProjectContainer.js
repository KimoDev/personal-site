import React from 'react';
import { Link } from 'gatsby';

import styles from '../styles/component-styles/projectContainer.module.scss'

const ProjectContainer = () => {
  return (
    <div className={styles.ProjectContainer}>
      <div className={styles.imageWrapper}>
        {/*<img src="" alt=""/> */}
      </div>
      <div className={styles.contentWrapper}>
        <h1>Project Title</h1>
        <p>Web Application - REACT | NODEJS | SASS</p>
        <p>Lucas ipsum dolor sit amet choka bib wicket hutt 
        h’nemthean roan aramandi.</p>
        
        <Link to="/weather">
          <button>View Project</button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectContainer;