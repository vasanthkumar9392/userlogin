import {Component} from 'react'

import './index.css'

class Message extends Component {
  render() {
    const {status} = this.props
    let messageHeading
    if (status === true) {
      messageHeading = <h1 className="heading">Please Login</h1>
    } else {
      messageHeading = <h1 className="heading">Welcome User</h1>
    }
    return messageHeading
  }
}

export default Message
