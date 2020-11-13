// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  };
  
  handleOnChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit (event) {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    });
  };

  render() {
    return(
      <div>
        <h2>Band Input</h2>
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleOnChange(event)} />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  };
};

export default BandInput;
