const initialState = {
    isLogged: false,
    errorMessage: null,
}

export default (state = initialState, action) => {

    switch(action.type) {
        case 'IS_AUTH': {
            return {
                type: 'IS_AUTH',
                isLogged: action.auth,
            }
        }
        case 'LOGGED_IN': {
            return {
                type: 'LOGGED_IN',
                isLogged: true,
            }
        }
        case 'LOGIN_FAILED': {
            return {
                type: 'LOGIN_FAILED',
                isLogged: false,
                errorMessage: action.errorMessage,
            }
        }
        default: {
            return state;
        }
    }

}