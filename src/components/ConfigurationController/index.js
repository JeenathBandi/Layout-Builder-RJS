// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => {
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,
        } = value

        const onChangeContentValue = event => {
          onToggleShowContent(event.target.checked)
        }

        const onChangeLeftNavBarValue = event => {
          onToggleShowLeftNavbar(event.target.checked)
        }

        const onChangeRightNavBarValue = event => {
          onToggleShowRightNavbar(event.target.checked)
        }

        return (
          <div className="config-controller-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="check-box-container">
              <div className="checkbox-items">
                <input
                  type="checkbox"
                  id="content"
                  onClick={onChangeContentValue}
                  value={showContent}
                />
                <label htmlFor="content" className="labels">
                  Content
                </label>
              </div>
              <div className="checkbox-items">
                <input
                  type="checkbox"
                  id="left-navbar"
                  onClick={onChangeLeftNavBarValue}
                  value={showLeftNavbar}
                />
                <label htmlFor="left-navbar" className="labels">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-items">
                <input
                  type="checkbox"
                  id="right-navbar"
                  onClick={onChangeRightNavBarValue}
                  value={showRightNavbar}
                />
                <label htmlFor="right-navbar" className="labels">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default ConfigurationController
