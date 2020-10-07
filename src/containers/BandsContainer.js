import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    let bandCards = this.props.bands.map((band, i) => <li> {band.name} </li> )
    return(
      <div>
        BandsContainer
       {bandCards}
      </div>
    )
  }
}

export default BandsContainer
