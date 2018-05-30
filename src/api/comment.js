import { database, auth} from './firebase';

export default (pictureId,commentText) => {
    return new Promise((res,rej) => {
        const { uid, photoURL, displayName } = auth.currentUser;

        database.collection('pictures').doc(pictureId).collection('comments').add({
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
            commentText: commentText,
        }).then((result) => {
            res(); // Success
        }).catch((error) => {
            rej(error);
        })
    })
}