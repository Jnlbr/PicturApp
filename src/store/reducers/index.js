import { IS_LOGGED } from '../actions'

// const INITIAL_STATE = {
//     user: null,
// }

function reducers(state = {logged:false}, action) {
    switch(action.type) {
        case IS_LOGGED: {
            return {
                type: IS_LOGGED,
                logged: action.logged,
            }
        }
        default: {
            return state;
        }
    }

}

export default reducers