import React from 'react'

const Trip = (props) => {

    console.log(props)
    return (
        <li> 
            {props.trip.location} - {props.trip.days_spent}
         </li> 
    )

}

export default Trip