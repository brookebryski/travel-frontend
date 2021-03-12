const initialState = {
    name: '',
    description: '',
    url: '',
    users: []
  }
  
  
  export default (state = initialState, action) => {
  
    switch(action.type) {
      case "UPDATED_DATA":
        return action.tripFormData
  
      case "RESET_TRIP_FORM":
        return initialState;

  
      default:
        return state;
    }
  }