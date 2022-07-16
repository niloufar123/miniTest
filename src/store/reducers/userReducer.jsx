import { UserConstants } from '../constants/userConstants';


//let user = UserService.getUser();
const initialState = {}; //user ? { loggedIn: true, user } : {};

export function login(state = initialState, action) {
  switch (action.type) {
    case UserConstants.LOGIN_REQUEST:
      return {
        ...state,
        status: "logining",
        user: action.user
       
        
      };
    case UserConstants.LOGIN_SUCCESS:
      return {
        ...state,
        status: "loggedIn",
         user: action.user
        
      };
    case UserConstants.LOGIN_FAILURE:
      return {
          ...state,
          status:"failed",
          message: action.error
      };
    case UserConstants.LOGOUT:
      return {
          ...state
      };
    case UserConstants.CLOSE_LOGIN_ALERT :
      return {
        ...state,
        status: "",
        message: ""
      }
    case UserConstants.KEY_EXCHANGE_SUCCESS : {
      return {
        ...state,
        keyExchange: action.exchangeData
      }
    }
    default:
      return state
  }
}