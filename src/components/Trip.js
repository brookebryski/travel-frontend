import React from 'react'
import {Redirect} from 'react-router-dom'

const Trip = (props) => {

    console.log(props)

    let trip = props.trips[props.match.params.id - 1]

    console.log(trip)

    return (
        <h1>
            {trip ? null : <Redirect to='/trips' />}
            {trip ? trip.location : null} - {trip ? trip.days_spent : null}
        </h1> 
    )

}

export default Trip