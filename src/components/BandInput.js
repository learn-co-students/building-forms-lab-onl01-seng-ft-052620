// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = { 
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
  }
  render() {
    return(
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label>
            Band Input
            <input 
            type="text"
            name="name"
            onChange={this.handleOnChange} />
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    )
  }
}

export default BandInput
