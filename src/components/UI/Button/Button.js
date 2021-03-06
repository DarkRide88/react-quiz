import React from 'react'
import styles from './Button.scss'

const Button = props => {

  const classes = [
    styles.button,
    styles[props.type]
  ]
  return (
    <button 
      onClick={props.onClick}
      className={classes.join(' ')}
      disabled={props.disabled}
      >
      {props.children}
    </button>
  )
}

export default Button
