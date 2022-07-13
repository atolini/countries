const FetchStatusReducer = (state, action) => { 
  switch (action.type) {
    case 'FETCH_COUNTRIES_SUCCESS': 
      return 'success'
       
    case 'FETCH_COUNTRIES_ERROR': 
      return 'error'

    default: 
      return 'loading'
  }
}

export default FetchStatusReducer