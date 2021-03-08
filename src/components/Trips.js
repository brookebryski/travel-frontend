import React from 'react'


const Trips = (props) => {

    return (
        <div>
           {props.trips.map(trip => <li key={trip.id}>{trip.location} - {trip.days_spent}</li> )}
        </div>
    )

}

export default Trips