import React from 'react'

const BandCard = props => {
    const bands = props.bands.map((band, i) => <li key={i}>{band.name}</li>)

    return (
        <div>
            {bands}
        </div>
    )
}

export default BandCard
