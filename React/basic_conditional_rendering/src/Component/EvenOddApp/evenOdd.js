// Write your code here
import {Component} from 'react'
import './evenOdd.css'

class EvenOddApp extends Component {
  state = {count: 0}

  incremetCount = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState(prevCount => {
      return {count: prevCount.count + random}
    })
  }

  render() {
    const {count} = this.state
    const display = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="counter-container">
          <h1 className="heading">Count {count}</h1>
          <p className="count_even">Count is {display}</p>
          <button
            type="button"
            className="increment"
            onClick={this.incremetCount}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
