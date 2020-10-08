// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBand(this.state);
  };

  render() {
    return (
      <div>
        Band Input
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            onChange={(e) => this.handleChange(e)}
            value={this.state.name}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BandInput;
