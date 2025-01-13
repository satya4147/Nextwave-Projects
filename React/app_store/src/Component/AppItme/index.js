import './index.css'

function AppItemDisplay(props){
  const {AppItemsDetails} = props
  const {imageUrl , appName} = AppItemsDetails
  return(
    <li className="items-list">
      <img src={imageUrl} alt={appName} className="display-images" />
      <p className="app-name">{appName}</p>

    </li>
  )
}
export default AppItemDisplay