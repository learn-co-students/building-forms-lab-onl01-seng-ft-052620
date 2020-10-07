import React, { Component } from 'react';
import BandInput from './components/BandInput';
import BandsContainer from './containers/BandsContainer';
import { addBand } from './actions/bands'
import { connect } from 'react-redux'


class App extends Component {
  render() {
    debugger
    return (
      <div className="App">
        <BandsContainer bands={this.props.bands}/>
        <BandInput addBand={this.props.addBand}/>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, {addBand})(App);
