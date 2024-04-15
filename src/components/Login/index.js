import {Component} from 'react'

import './index.css'

class Login extends Component {
  render() {
    return (
      <button type="button" className="button1" onClick={this.userClicking}>
        Login
      </button>
    )
  }
}

export default Login
