// Add BandInput component
import React, { Component } from 'react'
import { addBand } from '../containers/BandsContainer'
class BandInput extends Component {
  state = {
    name: ""
  }

  handleOnChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (e) =>{
    e.preventDefault();
    this.props.addBand(this.state);
  }
  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleOnChange} type="text" name="name" value={this.state}/>  
          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}

export default BandInput
