// Write your code here
import {Component} from 'react'
import Destinationltem from '../Destinationltem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  OnSearchEvent = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const seachResult = destinationsList.filter(eachItems =>
      eachItems.name.includes(searchInput),
    )

    return (
      <div className="search-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            className="text-search"
            onChange={this.OnSearchEvent}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="seach-card-container">
          {seachResult.map(eachItems => (
            <Destinationltem listItems={eachItems} key={eachItems.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
