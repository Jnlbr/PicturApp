import { auth, database } from './firebase';
import { auth as ProviderAuth } from 'firebase/app'

function getProvider(provider) {
    switch (provider) {
        case 'google': {
            return new ProviderAuth.GoogleAuthProvider(); 
        }
        default: {
            return;
        }
    }

}

export default (provider) => {
    const _provider = getProvider(provider);
    auth.useDeviceLanguage();

    // TODO: Verify that the provider is not missing 
    return new Promise((res,rej) => {
        auth.signInWithPopup(_provider).then((result) => {
            let { uid, displayName, email, photoURL } = result.user;
            database.doc('users/' + uid).set({
                displayName: displayName,
                email: email,
                photoURL: photoURL,
            }).then(() => {
                console.log('User saved!');
                res();              
            }).catch(error => {                
                console.log('Got an error: ' + error);
                rej(error)
            })     
        }).catch(function (error) {
            console.log('Got an error on logIn form, try again later: ' + error);
            rej(error)
        });
    })
}