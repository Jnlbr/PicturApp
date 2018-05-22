import { firestore } from 'firebase/app';

export default () => {
    return new Promise((res,rej) => {
        firestore().collection('pictures').get()
        .then((querySnapshot) => {
            res(querySnapshot);
        }).catch((error) => {
            console.log('Got an error on pictures: ' + error);
            rej(error);
        })
    })
}