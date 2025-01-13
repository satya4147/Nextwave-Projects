// Write your code here
import './suggestionItem.css'

function SuggestionItems(props) {
  const {Suggestion, upDateSearchInput} = props
  const {suggestion} = Suggestion

  const onUpdateSearchInput = () => {
    upDateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-items">
      <p className="suggestion-text">{suggestion}</p>
      <button
        className="arrow-button "
        type="button"
        onClick={onUpdateSearchInput}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItems
