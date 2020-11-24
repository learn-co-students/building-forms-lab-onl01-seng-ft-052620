// Add BandInput component
import React, { Component } from 'react'
// import {connect} from 'react-redux'
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
          <input onChange={this.handleOnChange} type="text" name="name" value={this.state.name}/>  
          <input type="submit" value="submit" />
        </form>

      </div>
    )
  }
}

export default BandInput
