// Write your code here

import {Component} from 'react'
import './lightDark.css'

class LightDarkMode extends Component {
  state = {isDrakMode: true}

  onLightMode = () => {
    this.setState(prevMode => ({
      isDrakMode: !prevMode.isDrakMode,
    }))
  }

  render() {
    const {isDrakMode} = this.state
    const textChange = isDrakMode ? `Light Mode` : `Dark Mode`
    const colorChange = isDrakMode ? 'darkMode' : 'lightMode'

    return (
      <div className="app-container">
        <div className={`container ${colorChange}`}>
          <h1>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onLightMode}>
            {textChange}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
