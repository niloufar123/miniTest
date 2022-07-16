

const initialState =[]; 

export function data(state = initialState, action) {
  switch (action.type) {
    case "GET_FORMS":
      return {
        ...state,
        forms: action.payload
       
        
      };
    
    default:
      return state
  }
}