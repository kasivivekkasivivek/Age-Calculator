// Write your code here.
import './index.css'
import {Component} from 'react'

class AgeCalculator extends Component {
  state = {
    yearOfBirth: '',
    showError: false,
    showResult: false,
  }

  /* functions to set values for showError or showResult  */
  isErrorOccurred = value => {
    this.setState({showError: value})
  }

  isResultSuccessful = value => {
    this.setState({showResult: value})
  }

  /* take value from input as user input and assign value to state yearOfBirth */

  onChangeUserInput = event => {
    this.setState({yearOfBirth: event.target.value})
    this.isErrorOccurred(false)
    this.isResultSuccessful(false)
  }
  /* calculate age  */

  calculateAge = () => {
    const {yearOfBirth} = this.state
    const dateOFBirth = new Date(yearOfBirth)
    const dateOfBirthYear = dateOFBirth.getFullYear()

    const presentDate = new Date()
    const presentYear = presentDate.getFullYear()
    return presentYear - dateOfBirthYear
  }
  /* on click button event action */

  onClickCalculateAge = () => {
    const {yearOfBirth} = this.state
    const age = this.calculateAge()
    if (age > 0 && Number.isInteger(age) && yearOfBirth.length <= 4) {
      this.isErrorOccurred(false)
      this.isResultSuccessful(true)
    } else {
      this.isErrorOccurred(true)
    }
  }

  /* show error message */

  renderErrorMessage = () => {
    const {showError} = this.state
    if (showError) {
      return <p className="error-message">Enter the year that you are Born</p>
    }
    return null
  }

  /* to print success message */
  getCalculatedAgeText = () => {
    const age = this.calculateAge()
    if (age === 1) {
      return `you are ${age} year old by the end of 2021`
    }
    return `you are ${age} years old by the end of 2021`
  }

  renderResultMessage = () => {
    const {showResult} = this.state
    if (showResult) {
      return <p className="result-message">{this.getCalculatedAgeText()}</p>
    }
    return null
  }

  /* main render  */

  render() {
    const {yearOfBirth} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <div className="age-container">
            <h1 className="heading">Age Calculator</h1>
            <input
              type="text"
              className="user-input "
              placeholder="Enter the year that you are born"
              onChange={this.onChangeUserInput}
              value={yearOfBirth}
            />
            {this.renderErrorMessage()}
            {this.renderResultMessage()}
            <button
              className="button"
              type="button"
              onClick={this.onClickCalculateAge}
            >
              Calculate
            </button>
          </div>
          <div className="image-container">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/age-calculater-persons-img.png"
              alt="peopleImage"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AgeCalculator
