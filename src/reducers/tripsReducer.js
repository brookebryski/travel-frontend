const initialState = 
{
    trips:[],
    currentUser: "",
    userTrips: [],
    tripHistories: [],
    isLoading: false,
 
}
      

export default (state = initialState, action) => {
    
    switch (action.type) {

        case 'LOADING':
            return {
                ...state,
                isLoading: true
            }
        case "GET_ALL_TRIPS_SUCCESS": 
            return { ...state,
                    trips: action.trips,
                    isLoading: false
            }

        case "GET_TRIP_HISTORIES_SUCCESS": 
            return { ...state,
                    tripHistories: action.tripHistories,
            }
            
        case "SET_CURRENT_USER": 
            return { ...state,
                    currentUser: action.user,
            }

        case "GET_USER_TRIPS_SUCCESS": 
            let myTrips = action.user.trips.map(t => {
                t.claimed = "true"
                return t
            })
            return { ...state,
                    userTrips:  myTrips
            }
            
        case "MARK_AS_CLAIMED":
            let newArray = [...state.trips];
            let userTrips = [ ...state.userTrips]
                
            newArray.forEach( t => {
                t.claimed="false"
                userTrips.map(trip => {
                    if(t.id === trip.id) {
                        t.claimed="true";
                    }     
                        
                    return t
                })         
            })
             
            return {
                ...state,
                trips: newArray,
            }
            
        case "ADD_TRIP_HISTORY_SUCCESS":
            let newTrip = action.trip
            newTrip.claimed="true" 
            let newList = [...state.trips]

            newList.forEach(t => {
                if (t.id === newTrip.id) {
                    t.claimed="true"
                    t.users.push(action.user)

                }
             })

            return {
                ...state, 
                tripHistories: [...state.tripHistories, action.tripHistory],
                userTrips: [...state.userTrips, newTrip],
                trips: newList
            }

        case "REMOVE_TRIP_HISTORY_SUCCESS": 
            let updateTrips = [...state.trips]

            updateTrips.forEach(t => {
                if (t.id === action.trip.id) {
                    t.claimed="false"
                    t.users.splice(t.users.indexOf(action.user), 1)
                }
             })

            return {
                ...state,
                tripHistories: state.tripHistories.filter(to => to.id !== action.tripHistory.id ),
                userTrips:   state.userTrips.filter(t => t.id !== action.trip.id ),
                trips: updateTrips,
            }
            
         
        case "CREATE_TRIP_SUCCESS":
            return {
                    ...state,
                    trips: [...state.trips, action.trip]
            }

       
                
        default:
            return state
    }
}
