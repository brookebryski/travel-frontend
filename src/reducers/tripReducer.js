
export default function tripReducer(state = {trips: []}, action) {
   switch (action.type) {
     case 'FETCH_TRIPS':
       return {trips: action.payload}  
     case 'ADD_TRIP':
       return {...state, trips: [...state.trips, action.payload]}
    case 'ADD_ACTIVITY':
      let trips = state.trips.map(trip => {
        if (trip.id === action.payload.id) {
          return action.payload
        } else {
           return trip
        }
      })
       return {...state, trips: trips}
       case 'DELETE_ACTIVITY':
        let tripsTwo = state.trips.map(trip => {
          if (trip.id === action.payload.id) {
            return action.payload
          } else {
            return trip
          }
        })
    default:
      return state
  }
}