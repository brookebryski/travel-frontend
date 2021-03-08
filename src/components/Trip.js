import React from 'react'

const Trip = (props) => {

    console.log(props)

    let trip = props.trips[props.match.params.id - 1]

    console.log(trip)

    return (
        <li> 
            {trip ? trip.location : null} - {trip ? trip.days_spent : null}
         </li> 
    )

}

export default Trip