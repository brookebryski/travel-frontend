
export default function tripReducer(state = {trips: []}, action) {
   switch (action.type) {
     case 'FETCH_TRIPS':
       return {trips: action.payload}  
     case 'ADD_TRIP':
       return {...state, trips: [...state.trips, action.payload]}
    case 'ADD_ACTIVITY':
       return {...state, trips: [...state.trips, action.payload]}
    default:
      return state
  }

}