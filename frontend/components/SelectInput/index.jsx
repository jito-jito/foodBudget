import React from 'react'
import Button from '../Button'
import styles from './SelectInput.module.css'

export default class SelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewOptions: false
    }
    this.onOpenOptions = this.onOpenOptions.bind(this)
    this.onDiscartOption = this.onDiscartOption.bind(this)
    this.onAddOption = this.onAddOption.bind(this)
  }
  
  onOpenOptions(e) {
    e.preventDefault()
    this.setState(() => ( {viewOptions : true}))
  }

  onDiscartOption(e) {
    const option = e.target.dataset.value

    this.props.setOptions({
      ...this.props.options,
      [option] : false
    })
    this.setState((state, props) => {
      return {
        viewOptions : false
      }
      
    })
  }

  onAddOption(e) {
    const option = e.target.dataset.value
    this.props.setOptions({
      ...this.props.options,
      [option] : true
    })
    this.setState((state, props) => {
      return {
        viewOptions : false
      }
      
    })
  }

  componentDidMount() {
    let event = document.addEventListener('click', (e) => {
      e.stopPropagation()
      if(e.target.id != this.props.targetId) {
        this.setState(() => ({ viewOptions: false }))
      }
    })
  }


  render() {
    return(
      <>
        <div className={styles.select}>
          <div className={styles.selectContainerSelectAed}>
            {Object.keys(this.props.options).map(option => (
              this.props.options[option] === true ? <span key={option} onClick={this.onDiscartOption} data-value={option} className={styles.selectedOption}>{`${option}`}</span> : ''
            ))
            }
          </div>
          <div className={styles.selectContainerMenu}>
            <Button 
              className={styles.selectButton} 
              id={this.props.targetId}
              value='Agregar'
              onClick={this.onOpenOptions}
            >
              {/* <span 
                className={styles.selectButtonSymbol}
                id='optionButtonSymbol'
                // onClick={this.onOpenOptions}  
              >
               {'>'}
              </span> */}
            </Button>
            <div className={styles.selectOptions} >
              {this.state.viewOptions && Object.keys(this.props.options).map(option => (
                this.props.options[option] === false ? <span key={option} onClick={this.onAddOption} data-value={option} className={styles.selectOption}>{`${option}`}</span> : ''
              ))
              }
            </div>
          </div>
        </div>
      </>
    )
  }
} 