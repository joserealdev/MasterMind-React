import React, { Component } from 'react'
import Button from 'components/button'
import LITERALS from 'commons/constants/literals'
import styles from './header.css'

class Header extends Component {
  render() {
    return (
      <header className={ styles.container }>
        <div className={ styles.text }>
          {LITERALS.TITLE}
        </div>
        <Button
          className={ styles.reload }
          onClick={ () => window.location.reload() }
          text={ LITERALS.NEWGAME }
        />
      </header>
    )
  }
}

export default Header
