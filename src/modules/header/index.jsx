import React, { Component } from 'react'
import LITERALS from 'commons/constants/literals'
import styles from './header.css'

class Header extends Component {
  render() {
    return (
      <header className={ styles.container }>
        <div className={ styles.text }>
          { LITERALS.TITLE }
        </div>
      </header>
    )
  }
}

export default Header
