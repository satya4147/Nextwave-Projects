// Write your code here
import {Component} from 'react'
import './coin_toil_game.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    searchResult: headImage,
    headCount: 0,
    toilsCount: 0,
  }

  onTossCoin = () => {
    const {headCount, toilsCount} = this.state
    let toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let lasteHeadCount = headCount
    let lasteToilCount = toilsCount

    if (toss === 0) {
      tossImage = headImage
      lasteHeadCount += 1
    } else {
      tossImage = tailImage
      lasteToilCount += 1
    }

    this.setState({
      searchResult: tossImage,
      headCount: lasteHeadCount,
      toilsCount: lasteToilCount,
    })
  }

  render() {
    const {searchResult, headCount, toilsCount} = this.state
    const totalCount = headCount + toilsCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin and Toss Game </h1>
          <p className="coin-toss-pragrapha">Heads (or) Tails</p>
          <img
            src={searchResult}
            alt="toss result"
            className="toss-result-img"
          />
          <button
            className="toss-button"
            type="button"
            onClick={this.onTossCoin}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total-count">Total:{totalCount}</p>
            <p className="heads-count">Heads: {headCount}</p>
            <p className="tails-count">Tails: {toilsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
