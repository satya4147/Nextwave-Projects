// Write your code here
import SuggestionItems from '../googleSuggestionItem/suggestionItem'
import './suggestion.css'
import {Component} from 'react'


class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  upDateSearchInput = value => {
    this.setState({searchInput: value})
  }

  onChangeValue = event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(suggestionsValue =>
      suggestionsValue.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="google-suggestion-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
              className="google-logo"
            />
          </div>
          <div className="search-input-suggestion-container">
            <div className="search-input-container ">
              <input
                type="search"
                className="search-input"
                onChange={this.onChangeValue}
                value={searchInput}
              />
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                  alt="search icon"
                  className="search-icon"
                />
              </div>
            </div>
          </div>
          <ul className="suggestion-list">
            {searchResult.map(eachValue => (
              <SuggestionItems
                key={eachValue.id}
                Suggestion={eachValue}
                upDateSearchInput={this.upDateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
