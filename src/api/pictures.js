import { database } from './firebase';

export default () => {
    return new Promise((res,rej) => {
        database.collection('pictures').get()
        .then((querySnapshot) => {
            let pictures = [];
            querySnapshot.forEach((picture) => {
                pictures.push(picture.data());
            });
            res(pictures);
        }).catch((error) => {
            console.log('Got an error on pictures: ' + error);
            rej(error);
        })
    })
}