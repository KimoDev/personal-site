import React from 'react'
import { Link } from "gatsby"
import {useSpring, animated} from 'react-spring'

import '../styles/overlay.scss';

const Overlay = (props) => {
  const fade = useSpring({
    opacity: props.nav ? 1 : 0
  })
  return (
    <div className="overlay-wrapper">
      <ul>
        <animated.li  style={fade}>
          <Link to="/projects">Projects</Link>
        </animated.li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    
  )
}

export default Overlay;
