import './index.css'
import HistoryList from '../HistoryList'
import {Component} from 'react'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

class BrowserHistory extends Component {
  state = {searchInput: '', historyDetails: initialHistoryList, isTrue: true}
  onSearchInputItem = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteFun = id => {
    const {historyDetails} = this.state
    const onDelete = historyDetails.filter(eachItems => eachItems.id !== id)
    this.setState({historyDetails: onDelete})

    if (historyDetails.length === 1) {
      this.setState({isTrue: true})
    }
  }

  render() {
    const {searchInput, historyDetails} = this.state
    const serachResult = historyDetails.filter(eachValue =>
      eachValue.title
        .toLocaleLowerCase()
        .includes(searchInput.toLocaleLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="container">
          <div className="search-bar-card">
            <div className="item-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
                className="app-logo"
              />
            </div>
            <div className="search-input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                type="search"
                className="input-box"
                value={searchInput}
                onChange={this.onSearchInputItem}
              />
            </div>
          </div>
          <ul className="ul-list">
            {serachResult.length === 0 ? (
              <p className="error-msg">There is no history to show</p>
            ) : (
              serachResult.map(eachItems => (
                <HistoryList
                  HistoryListItem={eachItems}
                  key={eachItems.id}
                  onDeleteFun={this.onDeleteFun}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
