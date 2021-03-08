import React from 'react'
import Trip from './Trip'


const Trips = (props) => {
    
return (
    <div>
      {props.trips.map(trip =>
        <li key={trip.id}><Trip trip={trip}/></li> )}
    </div>
    )

}

export default Trips