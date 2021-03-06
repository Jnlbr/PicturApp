import * as Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDTDBIcUyIvSoaD_XIilufEGTwoq93XucE",
    authDomain: "instagram-c3471.firebaseapp.com",
    projectId: "instagram-c3471",
    databaseURL: "https://instagram-c3471.firebaseio.com",
    storageBucket: "instagram-c3471.appspot.com",
    messagingSenderId: "218554694402"
};
const settings = {
    timestampsInSnapshots: true
}

Firebase.initializeApp(config);

const database = Firebase.firestore();
const storage = Firebase.storage();
const auth = Firebase.auth();

database.settings(settings);

export { database, storage, auth }