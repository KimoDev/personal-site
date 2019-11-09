import React from 'react';
import styles from '../styles/component-styles/alert.module.scss';
import close from '../images/icons/close-icon.svg'

const Alert = (props) => {
  return (
    <div className={styles.label}>
      <p>{props.Message}</p>
      <img src={close} alt="close icon"/>
    </div>
  )
}

export default Alert;