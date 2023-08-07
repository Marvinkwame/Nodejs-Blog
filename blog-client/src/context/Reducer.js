const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,  //starting the process
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false, //finished fetching process
        error: false,
      };
    case "LOGIN_FAILED":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT": 
      return {
        user: null,
        isFetching: false,
        error: false,
      }
    default: 
      return state;
  }
};


export default Reducer;