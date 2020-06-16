import React from 'react'

import styles from './MenuToggle.scss'

const MenuToggle = props => {
  const classes = [
    styles['menu-toggle'],
    'fa'
  ]
  if (props.isOpen) {
    classes.push('fa-times')
    classes.push(styles.open)
  } else {
    classes.push('fa-bars')
  }

  return (
    <i
      className={classes.join(' ')}
      onClick={props.onToggle}
    />
  )
}

export default MenuToggle