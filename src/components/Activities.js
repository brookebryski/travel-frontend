import React from 'react'

 const Activities = (props) => {

    return (
        <div>
         {props.activities && props.activities.map(activity =>
         <li key={activity.id}><h3>{activity.place}:</h3>({activity.kind})<br></br> {activity.description}</li>
         )}
        </div>
    )

 }

 export default Activities