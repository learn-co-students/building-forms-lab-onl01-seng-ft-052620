import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandCard from '../components/BandCard'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  genBands = () => {
    return this.props.bands.map( (band,i) => <BandCard key={i} band={band} /> )
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.genBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand:(band) => dispatch({type:"ADD_BAND",band})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer)
