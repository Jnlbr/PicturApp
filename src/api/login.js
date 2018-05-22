import { auth, firestore } from 'firebase/app';

function getProvider(provider) {
    switch (provider) {
        case 'google': {
            return new auth.GoogleAuthProvider(); 
        }
        default: {
            return;
        }
    }

}

export default (api) => {
    const provider = getProvider(api);
    auth().useDeviceLanguage();

    return new Promise((res,rej) => {
        auth().signInWithPopup(provider).then((result) => {
            let { uid, displayName, email } = result.user;
            firestore().doc('users/' + uid).set({
                name: displayName,
                email: email,
            }).then(() => {
                console.log('User saved!');                
            }).catch(error => {                
                console.log('Got an error: ' + error);                
            })            
            res();
        }).catch(function (error) {
            console.log('Got an error on logIn form, try again later: ' + error);
            rej(error)
        });
    })
}