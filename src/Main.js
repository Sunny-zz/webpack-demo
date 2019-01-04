import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
class Main extends Component {
  render() {
    return (
      <div>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
      </div>
    )
  }
}

export default Main
