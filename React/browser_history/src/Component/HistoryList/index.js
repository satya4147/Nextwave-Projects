import './index.css'

function HistoryList(props) {
  const {HistoryListItem, onDeleteFun} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = HistoryListItem

  const deleteItems = () => {
    onDeleteFun(id)
  }

  return (
    <li className="list-container">
      <div className="history-container">
        <div className="logo-title-card">
          <p className="time-accssed">{timeAccessed}</p>
          <div className="logo-and-title-card">
            <img src={logoUrl} className="item-logo" alt="domain logo" />
            <p className="item-logo-name">{title}</p>
            <p className="item-logo-url" id="domainUrl">
              {domainUrl}
            </p>
          </div>
        </div>
        <button
          className="button"
          type="button"
          data-testid="delete"
          id="delete"
          onClick={deleteItems}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryList
