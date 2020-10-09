import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import BandsDisplay from '../components/BandsDisplay'
class BandsContainer extends Component {
  
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <BandsDisplay bands={this.props.bands}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
addBand: band => dispatch({ type: "ADD_BAND", band})
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
