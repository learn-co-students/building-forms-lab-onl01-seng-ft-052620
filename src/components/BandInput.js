import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input  onChange={this.handleOnChange} name="name" type="text" value={this.state.name}></input>
          <button value='submit' type='submit'>Create Band</button>
        </form>
      </div>
    )
  }
}


export default BandInput
