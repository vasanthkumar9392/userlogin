import {Component} from 'react'

import './index.css'

class Logout extends Component {
  render() {
    return (
      <button type="button" className="button1" onClick={this.userClicking}>
        Logout
      </button>
    )
  }
}

export default Logout
