import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import Passwords from '../Passwords'

const backgroundsList = [
  'profile-1',
  'profile-2',
  'profile-3',
  'profile-4',
  'profile-5',
  'profile-6',
  'profile-7',
  'profile-8',
]

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    isShowAllPass: false,
    input: '',
  }

  onDeletePass = id => {
    const {passwordsList} = this.state
    const onDelFilter = passwordsList.filter(eachPass => eachPass.id !== id)
    this.setState({passwordsList: onDelFilter})
  }

  getWebsite = event => {
    this.setState({website: event.target.value})
  }

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  addPasswordIntoList = event => {
    const num = Math.ceil(Math.random() * backgroundsList.length - 1)
    const backgroundColor = backgroundsList[num]
    event.preventDefault()
    const {website, username, password} = this.state
    const newPassDetails = {
      id: v4(),
      website,
      username,
      password,
      backgroundColor,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassDetails],
      website: '',
      username: '',
      password: '',
    }))
  }

  getFilterList = event => {
    this.setState({input: event.target.value})
  }

  renderPasswordListItems = filteredList => {
    const {isShowAllPass} = this.state

    return filteredList.map(eachPass => (
      <Passwords
        onDeletePass={this.onDeletePass}
        key={eachPass.id}
        isShowAllPass={isShowAllPass}
        eachPass={eachPass}
      />
    ))
  }

  onChangeCheckBox = () => {
    const {isShowAllPass} = this.state
    this.setState({isShowAllPass: !isShowAllPass})
  }

  renderEmptyContainer = () => (
    <div className="empty-container">
      <img
        className="empty-image"
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
      />
      <p className="empty-text">No Passwords</p>
    </div>
  )

  render() {
    const {passwordsList, input, website, password, username} = this.state
    const filteredList = passwordsList.filter(eachPass =>
      eachPass.website.toLowerCase().includes(input.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="inner-container">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="add-password-card">
            <img
              className="password-manager-img-sm"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
            <div className="form-container">
              <h1 className="add-password-heading">Add New Password</h1>
              <form>
                <div className="input-container">
                  <div className="input-image-container">
                    <img
                      className="input-image"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                    />
                  </div>
                  <input
                    onChange={this.getWebsite}
                    placeholder="Enter Website"
                    className="input"
                    type="text"
                    value={website}
                  />
                </div>
                <div className="input-container">
                  <div className="input-image-container">
                    <img
                      className="input-image"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                    />
                  </div>
                  <input
                    onChange={this.getUsername}
                    placeholder="Enter Username"
                    className="input"
                    type="text"
                    value={username}
                  />
                </div>
                <div className="input-container">
                  <div className="input-image-container">
                    <img
                      className="input-image"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                    />
                  </div>
                  <input
                    onChange={this.getPassword}
                    placeholder="Enter Password"
                    className="input"
                    type="password"
                    value={password}
                  />
                </div>
                <div className="button-container">
                  <button
                    onClick={this.addPasswordIntoList}
                    className="add-button"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              className="password-manager-img-lg"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
          <div className="your-passwords-card">
            <div className="your-pass-input-container">
              <div className="passwords-count-container">
                <h1 className="your-pass-heading">Your Passwords</h1>
                <p className="passwords-count">{passwordsList.length}</p>
              </div>
              <div className="search-container">
                <div className="search-img-container">
                  <img
                    className="search-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                  />
                </div>
                <input
                  onChange={this.getFilterList}
                  placeholder="Search"
                  className="search-input"
                  type="search"
                />
              </div>
            </div>
            <hr />
            <div className="check-box-container">
              <input
                id="checkBox"
                onChange={this.onChangeCheckBox}
                type="checkbox"
                className="check-box"
              />
              <label htmlFor="checkBox" className="show-passwords-heading">
                Show Passwords
              </label>
            </div>
            <ul className="list-container">
              {filteredList.length === 0
                ? this.renderEmptyContainer()
                : this.renderPasswordListItems(filteredList)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
