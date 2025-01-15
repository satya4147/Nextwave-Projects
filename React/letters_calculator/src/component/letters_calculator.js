// Write your code here.
import './letters_calculator.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onchangeTheValue = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {searchInput} = this.state
    const lengthOfvalue = searchInput.length

    return (
      <div className="app-container">
        <div className="container">
          <div className="left-side-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div>
              <label className="label-text">Enter the phrase</label>
              <br />
              <input
                type="text"
                className="input-text"
                id="text-name"
                placeholder = 'Enter the phrase'
                onChange={this.onchangeTheValue}
                value={searchInput}
              />
            </div>
            <button className="button" type="button">
              No.of letters: {lengthOfvalue}
            </button>
          </div>
          <div className="right-side-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
