import { database, auth } from './firebase';

export default (pictureId) => {
    let  { uid } = auth.currentUser;

    return new Promise((res,rej) => {
        database.collection('hearts').doc(`${uid}_${pictureId}`).set({
            uid: uid,
            pictureId: pictureId,
        }).then(() => {

        }).catch((error) => {

        });
    })
}