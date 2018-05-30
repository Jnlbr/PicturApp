import { loginWith } from '../../api';

// Put this into somewhere else
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGGED_IN = 'LOGGED_IN';
const IS_AUTH = 'IS_AUTH';

export function login(form) {
    return dispatch => {
        loginWith(form.provider).then(() => {
            dispatch({
                type: LOGGED_IN,
            });
        }).catch((error) => {
            dispatch({
                type: LOGIN_FAILED,
                errorMessage: error,
            });
        });
    }
}

export function isAuth(auth) {
    return {
        type: IS_AUTH,
        auth: auth,
    }
}
// Dispatch functions