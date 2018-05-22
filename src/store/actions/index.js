export const IS_LOGGED = 'IS_LOGGED';

export function isLogged(isLogged) {
    return {
        type: IS_LOGGED,
        logged: isLogged,
    }
}