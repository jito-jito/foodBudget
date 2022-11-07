import React from 'react'
import styles from './Title.module.css'

export default class Title extends React.Component {

  render() {
    return (
      <h1 className={`${this.props.className} ${styles.title}`}>{this.props.children}</h1>
    )
    
  }
}