// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  OnRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="random-container">
        <div className="random-card-container">
          <h1 className="heading">Random Number </h1>
          <p className="descrption">
            Generate a random number in the range of 0 to 100{' '}
          </p>
          <button
            type="submit"
            className="button"
            onClick={this.OnRandomNumber}
          >
            Generate
          </button>

          <p className="displayNumber">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
