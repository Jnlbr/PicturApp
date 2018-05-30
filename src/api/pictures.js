import { database } from './firebase';

export default () => {
    const ref = database.collection('pictures');

    return new Promise((res,rej) => {    
        ref.get().then((querySnapshot) => {
            let pictures = [];
            querySnapshot.forEach((picture) => {          
                pictures.push({
                    id: picture.id,
                    ...picture.data(),
                });              
            });            
            res(pictures);
        }).catch((error) => {
            console.log('Got an error on pictures: ' + error);
            rej(error);
        })
    })
}