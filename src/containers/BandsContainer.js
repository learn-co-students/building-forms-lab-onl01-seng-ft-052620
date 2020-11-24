import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { library } from 'webpack';
import BandInput from '../components/BandInput'
class BandsContainer extends Component {
  
  render() {
    const bandList = this.props.bands.map((band, i) => <li key={i}>Band Name: {band.name}</li>)

    // debugger;
    return(
      <div>
        BandsContainer
        
        <BandInput addBand={this.props.addBand}/><br />
        {/* <ul> */}
          {/* {this.props.bands.map((band) => <li>Band Name: {band}</li>)} */}
          {bandList}
        {/* </ul> */}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  // debugger;
  return {
    addBand: band => dispatch({type: "ADD_BAND", band})
  }
}


const mapStateToProps = state => {
  debugger;
  return {
    bands: state.bands
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

