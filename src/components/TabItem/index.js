// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabClassName = isActive ? 'tab-button active' : 'tab-button'

  const onClickButton = () => onClickTab(tabId)

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickButton}
        className={activeTabClassName}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
