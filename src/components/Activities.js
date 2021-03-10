
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
 /*

import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import {deleteActivity} from '../actions/deleteActivity'


const Activities = props => {

  const handleDelete = (activity) => {
    props.deleteActivity(activity.id, activity.trip_id)
  }

  return (
    <div className='Activities'>
      {props.activities && props.activities.length === 0 ? <h6>There aren't any activities for this location yet</h6> : <h5>Below Are Some Activities for this Location</h5>}
      <ListGroup>
        {props.activities && props.activities.map(activity =>
          <ListGroupItem style={{fontSize: 'xx-large' }} key={activity.id}>{activity.location}   <Button style={{backgroundColor: 'black'}}onClick={() => handleDelete(activity)} className='DeleteButton'>Delete This Activity</Button></ListGroupItem>
        )}
      </ListGroup>
    </div>
  );
};

export default connect(null, { deleteActivity })(Activities);
*/