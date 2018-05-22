const initialState = {
    isLogged: false,
    errorMessage: null,
}

export default (state = initialState, action) => {

    switch(action.type) {
        case 'IS_AUTH': {
            return {
                isLogged: action.auth,
            }
        }
        case 'LOGGED_IN': {
            return {
                isLogged: true,
            }
        }
        case 'LOGIN_FAILED': {
            return {
                isLogged: false,
                errorMessage: action.errorMessage,
            }
        }
        default: {
            return state;
        }
    }

}