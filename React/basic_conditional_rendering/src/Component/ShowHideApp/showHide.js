// Write your code here

import './showHide.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {showHide: false, showHideLastName: false}

  showHideMessage = () => {
    this.setState(prevMessage => ({showHide: !prevMessage.showHide}))
  }

  showHideLastName = () => {
    this.setState(prevMessage => ({
      showHideLastName: !prevMessage.showHideLastName,
    }))
  }

  render() {
    const {showHide, showHideLastName} = this.state

    return (
      <div className="app-container">
        <h1>Show/Hide</h1>
        <div className="show-card-container">
          <div className="show-container">
            <button
              className="button"
              type="button"
              onClick={this.showHideMessage}
            >
              Show/Hide Firstname
            </button>
            {showHide && <p className="messages">Joe</p>}
          </div>
          <div className="show-container">
            <button
              className="button"
              type="button"
              onClick={this.showHideLastName}
            >
              Show/Hide Lastname
            </button>
            {showHideLastName && <p className="messages">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
