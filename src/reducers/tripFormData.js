const initialState = {
    name: '',
    description: '',
    url: '',
    users: []
  }
  
  
  export default (state = initialState, action) => {
  
    switch(action.type) {
      case "UPDATED_DATA":
        return action.toyFormData
  
      case "RESET_TOY_FORM":
        return initialState;

  
      default:
        return state;
    }
  }