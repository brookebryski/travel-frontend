export const deleteActivity = (activityId, tripId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/trips/${tripId}/activities/${activityId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(trip => dispatch({type: 'DELETE_ACTIVITY', payload: trip}))
    }
  }