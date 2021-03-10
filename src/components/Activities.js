import React from 'react'
import {connect} from 'react-redux'
import {deleteActivity} from '../actions/deleteActivity'

 class Activities extends React.Component {

    state = {}

    handleDelete = (activity) => {
        this.props.deleteActivity(activity.id, activity.trip_id)
      }

  render () {
    return (
        <div>
         {this.props.activities && this.props.activities.map(activity =>
         <li key={activity.id}><h3>{activity.place}:</h3>({activity.kind})<br></br> {activity.description} <button onClick={() => this.handleDelete(activity)}>Remove</button></li>
         )}
        </div>
    )
  }
 }

 export default connect(null, {deleteActivity})(Activities)

