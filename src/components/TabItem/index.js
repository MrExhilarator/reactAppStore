// Write your code here
import './index.css'

const TabItem = props => {
  const {tabInfo, onTabChange, isSelected} = props
  const {tabId, displayText} = tabInfo
  const changeTab = () => {
    onTabChange(tabId)
  }
  const isTabActive = isSelected ? 'selected-tab' : ''

  return (
    <li>
      <button
        type="button"
        onClick={changeTab}
        className={`${isTabActive} tab`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
