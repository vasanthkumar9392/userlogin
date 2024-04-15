import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {checking: true}

  userClicking = () => {
    this.setState(prevState => ({checking: !prevState.checking}))
  }

  render() {
    const {checking} = this.state

    let buttonElement
    if (checking === true) {
      buttonElement = <Login />
    } else {
      buttonElement = <Logout />
    }
    return (
      <div className="bg-container">
        <div className="inner-container">
          <Message status={checking} />
          {buttonElement}
        </div>
      </div>
    )
  }
}

export default Home
