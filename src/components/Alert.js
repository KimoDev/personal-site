import React from 'react';
import styles from '../styles/component-styles/alert.module.scss';
import close from '../images/icons/close-icon.svg'

const Alert = ({Message, status, onClick}) => {
  return (
    <>
      { status 
      ? null 
      : <div className={styles.label}>
          <p>{Message}</p>
          <img src={close} alt="close icon" onClick={onClick}/>
        </div> 
      }
    </>
    
  )
}

export default Alert;