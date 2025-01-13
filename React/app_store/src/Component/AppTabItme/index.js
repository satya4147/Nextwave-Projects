import './index.css'

function AppTabItem (props){
  const {TabDetails , setActiveApp} = props
  const {displayText , tabId}  = TabDetails

  const onClickApp = ()=>{
    setActiveApp(tabId)
  }

  return(
    <li className='items-list'>
      <button className='tab-button' type='button' onClick={onClickApp}  >{displayText}</button>
    </li>
  )
}

export default AppTabItem