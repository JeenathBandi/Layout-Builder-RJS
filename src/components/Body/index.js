// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const renderLeftNavBar = () => (
    <div className="left-menu-bar">
      <h1 className="menu-title">Left Navbar Menu</h1>
      <ul className="list-container">
        <li className="li-items">Item 1</li>
        <li className="li-items">Item 2</li>
        <li className="li-items">Item 3</li>
        <li className="li-items">Item 4</li>
      </ul>
    </div>
  )

  const renderContent = () => (
    <div className="content-container">
      <h1 className="menu-title">Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua . Ut enim ad minim
        veniam.
      </p>
    </div>
  )

  const renderRightNavBar = () => (
    <div className="right-bar-container">
      <h1 className="menu-title">Right Navbar</h1>
      <div className="ad-container">
        <p>Ad 1</p>
      </div>
      <div className="ad-container">
        <p>Ad 2</p>
      </div>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="body-container">
            {showLeftNavbar && renderLeftNavBar()}
            {showContent && renderContent()}
            {showRightNavbar && renderRightNavBar()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
