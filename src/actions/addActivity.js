export const addActivity = (activity, tripId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/trips/${tripId}/activities`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(activity)
      })
      .then(response => response.json())
      .then(trip => dispatch({type: 'ADD_ACTIVITY', payload: activity}))
    }
  }