import React, { Component } from 'react'
import { connect } from 'react-redux';
import Bandinput from '../components/BandInput.js';

class BandsContainer extends Component {

renderBands = () => this.props.gangs.map(gang => <li>{gang.name}</li>)


  render() {
    return(
      <div>
        BandsContainer
        {this.renderBands()}
        <Bandinput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gangs: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: bandname => dispatch({type: 'ADD_BAND', payload: bandname})
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
