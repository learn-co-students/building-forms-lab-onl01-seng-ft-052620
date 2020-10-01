// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleInputChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand({ ...this.state })
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input name="name" value={this.state.name} type="text" onChange={e => this.handleInputChange(e)}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput


