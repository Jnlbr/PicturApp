import { database, auth } from './firebase';

// Insert image into the DB
export default (storageRef, title = 'Image', description = 'This is an image') => {
    
    return new Promise((res,rej) => { 
        const { uid } = auth.currentUser;

        // ERROR: if image does not exist
        storageRef.getDownloadURL().then((url) => {
            database.collection('pictures').add({
                userId: uid,
                title: title,
                image: url,
                description: description,
            }).then((result) => {
                console.log('Image uploaded success. The image id is: ' + result.id);
                res(url); // If success, send the image's url
            }).catch((err) => {
                rej('Got an error: ' + err); // If not, send error
            });
        }).catch((err) => {
            rej('The object did not exist');
        })
    });
}