import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  addBand = (formData) => {
    this.props.dispatch({ type: "ADD_BAND", band: formData });
  };

  displayBands = () => {
    return this.props.bands.map((band, index) => (
      <li key={index}>{band.name}</li>
    ));
  };

  render() {
    return (
      <div>
        BandsContainer
        <BandInput addBand={this.addBand} />
        <ul>{this.displayBands()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands,
  };
};

export default connect(mapStateToProps)(BandsContainer);
