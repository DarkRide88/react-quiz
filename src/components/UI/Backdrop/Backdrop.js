import React from 'react'
import styles from './Backdrop.scss'

const Backdrop = props => <div className={styles.backdrop} onClick={props.onClick}/>

export default Backdrop