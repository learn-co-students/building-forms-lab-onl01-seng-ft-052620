import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Band from '../components/Band'
import { addBand } from '../actions/addBand'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.bands.map(band => <Band band={band} />)}
        </ul>
        <BandInput addBand={this.props.addBand} />
      </div>
    )
  }
}

export default connect(state => ({ bands: state.bands }), { addBand } )(BandsContainer)

