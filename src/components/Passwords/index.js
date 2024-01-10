import {Component} from 'react'
import './index.css'

class Passwords extends Component {
  render() {
    const {eachPass, isShowAllPass, onDeletePass} = this.props
    const {id, website, username, password, backgroundColor} = eachPass

    const onDelete = () => {
      onDeletePass(id)
    }

    return (
      <li className="list-pass-container">
        <div className="profile-container">
          <p className={`profile ${backgroundColor}`}>
            {website.slice(0, 1).toUpperCase()}
          </p>
          <div className="website-container">
            <p className="website">{website}</p>
            <p className="username">{username}</p>
            {isShowAllPass ? (
              <p className="username">{password}</p>
            ) : (
              <img
                className="passwords-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
              />
            )}
          </div>
        </div>
        <button
          data-testid="delete"
          onClick={onDelete}
          className="button-bg"
          type="button"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default Passwords
