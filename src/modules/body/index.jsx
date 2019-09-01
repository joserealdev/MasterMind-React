import React, { Component } from 'react'
import styles from './body.css'

class Body extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return(
      <div className={ styles.mainBodyWrapper } />
    )
  }
}

export default Body