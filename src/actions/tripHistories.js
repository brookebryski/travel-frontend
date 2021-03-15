// import { getMyTrips } from '../actions/currentUser';


// Synchronous action creators
export const setTripHistories = (tripHistories) => {
    return {
        type: 'GET_TRIP_HISTORIES_SUCCESS',
        tripHistories
        
    }
}

export const setTripHistory = (tripHistory, user, trip) => {
    return {
        type: "ADD_TRIP_HISTORY_SUCCESS",
        tripHistory,
        user, 
        trip
         
    }
}

export const removeTripHistory = (tripHistory, user, trip) => {
    return {
        type: "REMOVE_TRIP_HISTORY_SUCCESS",
        tripHistory,
        user, 
        trip
         
    }
}


export const getTripHistories = () => {

    return dispatch => {  
        return fetch(`http://localhost:3000/api/v1/trip_histories/`,
            { 
                credentials: "include",
                method: "GET",
                headers: { "Content-Type": "application/json" },
             })
       
      .then(r => r.json() )
      .then(trip_histories => {
        console.log("trip_histories", trip_histories)
        if (trip_histories.error) {
            alert(trip_histories.error)
        } else {
 
             dispatch(setTripHistories(trip_histories))

        }     
    })
}
}


export const claimTrip = ( trip, user ) => {
        const newData = {
           user_id: user.id,
           trip_id: trip.id
       }
       console.log("newData", newData)
    
        return dispatch => {  
            return fetch(`http://localhost:3000/api/v1/trip_histories/`,
                { 
                    credentials: "include",
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newData)
                })
           
          .then(r => r.json() )
          .then( tripHistory => {
              dispatch(setTripHistory(tripHistory, user, trip)) 
               
          })
           
         }
    }

    export const unclaimTrip = ( th, trip, user ) => {
        let selectedTripHistory = th.find(th =>  (th.user_id === user.id && th.trip_id === trip.id))
        console.log("th.id", selectedTripHistory.id)
            

        return dispatch => {  

            return fetch(`http://localhost:3000/api/v1/trip_histories/${selectedTripHistory.id}`,
                { 
                    credentials: "include",
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                })
           
          .then(r => r.text() )
          .then(tripHistory => {
              console.log(tripHistory)
               
               
            dispatch(removeTripHistory( selectedTripHistory, user, trip)) 

          })
      
         
        }
    }