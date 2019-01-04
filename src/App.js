import React, { Component } from 'react'
import './app.scss'
import pic from './img/1.jpg'
class App extends Component {
  state = {
    num: 10
  }
  render() {
    return (
      <div>
        <h1>hello webpack</h1>
        <span className='count'>{this.state.num}</span>
        <img src={pic} alt='' />
      </div>
    )
  }
}

export default App
