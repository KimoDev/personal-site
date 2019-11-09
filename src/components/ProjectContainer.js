import React from 'react';
import { Link } from 'gatsby';

import styles from '../styles/component-styles/projectContainer.module.scss'

const ProjectContainer = ({title, type}) => {
  return (
    <div className={styles.ProjectContainer}>
      <div className={styles.imageWrapper}>
        {/*<img src="" alt=""/> */}
      </div>
      <div className={styles.contentWrapper}>
        <h1>{title}</h1>
        <p>{type} - REACT | NODEJS | SASS</p>
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