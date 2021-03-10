import React from 'react'

import ActivitiesContainer from '../containers/ActivitiesContainer'

const Trip = (props) => {

    console.log(props)

    let trip = props.trips[props.match.params.id - 1]
    //let trip = props.trips.filter(trip => trip.id == props.match.params.id)[0]

    console.log(trip)

    return (
        <div>
        <h1>
            {trip ? trip.location : null} - {trip ? trip.days_spent : null}
        </h1> 
        <ActivitiesContainer trip={trip}/>
        </div>
    )

}

export default Trip