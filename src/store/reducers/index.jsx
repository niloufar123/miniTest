import { combineReducers} from 'redux';
// import { login } from "./userReducer";
// import {account } from "./accountReducer"
// import {card} from "./cardReducer";
// import {request} from "./requestReducer"
import {data} from './formsReducer'


const rootReducer = combineReducers({
    data
});


export default rootReducer;