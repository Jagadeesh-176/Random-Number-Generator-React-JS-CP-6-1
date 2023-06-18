// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  onClickButtton = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="heading">Random Number</h1>
          <p>
            Generate a random number in the
            <br /> range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.onClickButtton}
            className="button"
          >
            Generate
          </button>
          <p className="random-number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
