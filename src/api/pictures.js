import { database } from './firebase';

export default () => {
    const ref = database.collection('pictures');

    return new Promise((res,rej) => {    
        ref.get().then((querySnapshot) => {
            let pictures = [];
            querySnapshot.forEach((picture) => {          
                let userPicture = picture.data();
                let id = picture.id;
                let comments = [];
                // I don't like this... This is horrible
                ref.doc(id).collection('comments').get().then((_querySnapshot) => {
                    _querySnapshot.forEach((comment) => {
                        comments.push(comment.data());
                    });
                });
                pictures.push({
                    id: picture.id,
                    comments: comments,
                    ...userPicture,
                });              
            });            
            res(pictures);
        }).catch((error) => {
            console.log('Got an error on pictures: ' + error);
            rej(error);
        })
    })
}