import {database} from './firebase';

export default (pictureId) => {
    const ref = database.collection('pictures');

    return new Promise((res,rej) => {
        let comments = [];

        ref.doc(pictureId).collection('comments').get().then((querySnapshot) => {
            querySnapshot.forEach((comment) => {
                comments.push(comment.data());
            });
            res(comments);
        }).catch((error) => {
            console.log('Got an error on getting comments: ' + error);
            rej(error);
        })
    })
}