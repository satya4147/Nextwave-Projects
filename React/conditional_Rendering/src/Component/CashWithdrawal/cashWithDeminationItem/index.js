// Write your code here
import './index.css'

function DenominationsListItems(props) {
  const {eachListValue, onUpdateValue} = props
  const {value} = eachListValue

  const onBalanceAmount = () => {
    onUpdateValue(value)
  }

  return (
    <div className="balance-container">
      <li className="amount-of-value">
        <button type="submit" className="button" onClick={onBalanceAmount}>
          {value}
        </button>
      </li>
    </div>
  )
}

export default DenominationsListItems
