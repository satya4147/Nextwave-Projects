// Write your code here
import {Component} from 'react'
import DenominationsListItems from '../cashWithDeminationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  OnChangeAmoutValue = value => {
    this.setState(prev => ({balance: prev.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    // console.log(denominationsList)

    return (
      <div className="cashWith-container">
        <div className="cash-card-container">
          <div className="cash-name-conatainer">
            <h1 className="heading">{initial}</h1>
            <p className="cash-fullname-heading">{name}</p>
          </div>
          <div className="your-blance">
            <p className="balance">Your Balance</p>
            <p className="amount">{balance}</p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="chooseValue">CHOOSE SUM (IN RUPEES)</p>
          <ul className="cash-balance-container">
            {denominationsList.map(eachValue => (
              <DenominationsListItems
                key={eachValue.id}
                eachListValue={eachValue}
                onUpdateValue={this.OnChangeAmoutValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
