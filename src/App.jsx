import React, { Component } from 'react'
import styles from './App.css'
import Header from './modules/header'
import Body from './modules/body'
import Footer from './modules/footer'

class App extends Component {

  constructor(){
    super()
  }

  render(){
    return (
      <div className={ styles.wrapper }>
        <div className={ styles.mainContainer }>
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
