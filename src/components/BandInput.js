// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'
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
    this.props.addBand(this.state.name);
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
const mapDispatchToProps = (dispatch) => {
  return {
    addBand: band => dispatch(addBand(band))
  }
}
export default connect(null, mapDispatchToProps)(BandInput);
