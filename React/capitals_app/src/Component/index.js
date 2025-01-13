import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeValue = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const updateCountry = countryAndCapitalsList.find(
      eachcountries => eachcountries.id === activeCapitalId,
    )

    return updateCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)
    console.log(country)

    return (
      <div className="app-container">
        <div className="capital-container">
          <div className="card-container">
            <h1 className="heading">Countries and Capitals</h1>
            <div className="select-countries">
              <select
                className="countries"
                value={activeCapitalId}
                onChange={this.onChangeValue}
              >
                {countryAndCapitalsList.map(eachCountry => (
                  <option
                    key={eachCountry.id}
                    value={eachCountry.id}
                    className="options"
                  >
                    {eachCountry.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p className="question">is capital of which country?</p>
            </div>
            <p className="county">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
