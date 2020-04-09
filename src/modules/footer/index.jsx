import React, { Component } from 'react'
import styles from './footer.css'
import logo from '../../assets/logo.svg'

class Footer extends Component {
  render() {
    return (
      <footer className={ styles.container }>
        <div className={ styles.info }>
          { 'Made with React' }
          <img src={ logo } className={ styles.logo } alt="react logo" />
        </div>
      </footer>
    )
  }
}

export default Footer
