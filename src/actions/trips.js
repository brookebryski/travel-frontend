import { resetTripForm } from "./tripForm";
import { getTripHistories } from "./tripHistories";

// ** Synchronous Actions Creators **
// Action creators create actions which are plain objects → 
// Actions are dispatched to the store → 
// the store invokes reducers → 
// reducers generate new state 

export const fetchTripsSuccess = trips => {
  return {
    type: "GET_ALL_TRIPS_SUCCESS",
    trips
  };
};


export const addTrip = trip => {
    return {
      type: "CREATE_TRIP_SUCCESS",
      trip
    };
  };


 
// ** Asynchronous Action Creators **
// If a function (e.g. a thunk) is dispatched, redux-thunk calls that function, passing in the store's dispatch and getState. 
// The middleware intercepts the thunk so it does not go directly to the reducer 
// When that async fetch resolves,the callback can dispatch a normal action to the store. 
 
export const getAllTrips = () => {
  //thunk is function returned by another function
  //allows dispatch of actions inside the returned function
  return dispatch => {
     dispatch({type: 'LOADING'})

    //fetch returns a promise we are waiting to resolve
    return (
      fetch("http://localhost:3000/api/v1/trips", {
        credentials: "include",
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        //when resolved, parse response data to JSON
        .then(r => r.json())
        //dispatch action to set toys and send to reducer to update state
        .then(trips => {
          dispatch(fetchTripsSuccess(trips));
          dispatch(getTripHistories());

         })
        //if Promise is rejected
        .catch(error => {
          console.log("Error: ", error);
          })
    );
  };

   
};

 


export const createTrip = trip => {
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/trips", {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trip)
      })
        .then(r => r.json())
        .then(trip => {
          dispatch(addTrip(trip));
          dispatch(resetTripForm());
        });
    };
  };