// Write your code here
import './index.css'

const AppItem = props => {
  const {appInfo} = props
  const {appName, imageUrl} = appInfo

  return (
    <li className="app-container">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p className="app-title">{appName}</p>
    </li>
  )
}

export default AppItem
