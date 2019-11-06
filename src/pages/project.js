import React, { useState } from 'react'

import Header from '../components/Header';
import ProjectContainer from '../components/ProjectContainer';


const project = () => {
  // const [nav, toggleNav] = useState(false);

  return (
    <div>
      <Header 
      // navClicked={() => toggleNav(!nav)} 
      icon={require('../images/icons/burger-menu.svg')}/>
        <ProjectContainer />
    </div>
  )
}

export default project
