import React, { Component } from 'react'
import './app.css'
import pic from './img/1.jpg'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Main from './Main'
import { hot } from 'react-hot-loader/root'
class App extends Component {
  state = {
    num: 10
  }
  render() {
    return (
      <Router>
        <div>
          <h1>hello1 webpack</h1>
          <span className='count'>{this.state.num}</span>
          <button onClick={this.add}>+</button>
          <button>-----</button>
          <img src={pic} alt='' />
          <ul>
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
          </ul>
          <Main />
        </div>
      </Router>
    )
  }
  add = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
}

export default hot(App)
