import React from 'react'
import styles from './Button.module.css'

export default class Button extends React.Component {

  render () {
    return (
      <>
        <button 
          className={`${this.props.className} ${styles.button}`}
          id={this.props.id}
          onClick={this.props.onClick}
        >
          {this.props.value}
          {this.props.children}
        </button>
      </>
    )
  }
}