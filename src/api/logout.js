import { auth } from './firebase';

export default () => {
    return new Promise((res,rej) => {
        auth.signOut().then(() => {
            res();
        }).catch((error) => {
            console.log('Got an error on logOut form: ' + error);
            rej();
        });
    })
}