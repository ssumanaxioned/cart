const initialState = {
  isLoading: true,
  data: [],
  error: ''
}


const apiReducer =(state = initialState, action)=> {
  console.log('action.type',action);
  switch(action.type) {
    case 'FETCH_API_RECIEVED': 
    return {
      ...state, data: action.payload, isLoading: false
    }

    case 'FETCH_API_ERROR':
      return {
        ...state, error: action.payload, isLoading: false
      }

    default: return state
  }
}

export default apiReducer