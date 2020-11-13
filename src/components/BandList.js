import React from 'react'

const BandList = props => {
  const bandList = props.bands.map((band, i) => {
    return <li kep={i}>{band.name}</li>
  })
  return (
    <div>
      {bandList}
    </div>
  )
}

export default BandList
