

const initialState =[]; 

export function data(state = initialState, action) {
  switch (action.type) {
    case "GET_FORMS":
      return {
        ...state,
        forms: action.payload
       
        
      };
      case "GET_USER":
        return {
          ...state,
          formData:action.payload
        }
    
    default:
      return state
  }
}