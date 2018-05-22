import { combineReducers } from 'redux';
// import { IS_LOGGED } from '../actions'
import userReducers from './user'

// function toDelete(state = {logged:false}, action) {
//     switch(action.type) {
//         case IS_LOGGED: {
//             return {
//                 type: IS_LOGGED,
//                 logged: action.logged,
//             }
//         }
//         default: {
//             return state;
//         }
//     }
// }

const reducers = combineReducers({
    auth: userReducers
})

export default reducers