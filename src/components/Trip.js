import React from 'react'
import {Redirect} from 'react-router-dom'

import ActivitiesContainer from '../containers/ActivitiesContainer'

const Trip = (props) => {

    console.log(props)

    let trip = props.trips[props.match.params.id - 1]

    console.log(trip)

    return (
        <div>
        <h1>
            {trip ? trip.location : null} - {trip ? trip.days_spent : null}
        </h1> 
        <ActivitiesContainer/>
        </div>
    )

}

export default Trip