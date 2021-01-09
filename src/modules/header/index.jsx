import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'store/actions/game'
import Button from 'components/button'
import LITERALS from 'commons/constants/literals'
import styles from './header.css'

class Header extends Component {
  render() {
    const { onInitGame } = this.props
    return (
      <header className={ styles.container }>
        <div className={ styles.text }>
          {LITERALS.TITLE}
        </div>
        <Button
          className={ styles.reload }
          onClick={ () => onInitGame() }
          text={ LITERALS.NEWGAME }
        />
      </header>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onInitGame: () => dispatch(actions.initNewGame())
})

export default connect(
  null,
  mapDispatchToProps
)(Header)
