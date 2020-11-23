import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
class BandsContainer extends Component {
  render() {
    
    return(
      <div>
        BandsContainer
        <BandInput addBand={addBand}/><br />

      </div>
    )
  }
}
const addBand = (band) => {
  return {
    type: "ADD_BAND",
    band
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addBand: band => dispatch(addBand(band))
  }
}
export default connect(null, mapDispatchToProps)(BandsContainer)

