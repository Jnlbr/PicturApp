import React, { Component } from 'react';
import { auth, storage } from 'firebase';
import FileUpload from './fileUpload';
import { uploadPicture } from '../../api';

class FileUploadContainer extends Component {

    handleUpload = (event,inputFile) => {
        const file = inputFile || event.target.files[0];
        const { email } = auth().currentUser;
        const storageRef = storage().ref(`/pictures/${email}/${file.name}`);
        const task = storageRef.put(file);

        task.on('state_changed', snapshot => {
            // Make something cool
            // let percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, err => {
            // Handle error
            console.log(err);
        }, () => {
            
            uploadPicture(storageRef).then((url) => {
                // Handle upload success
                console.log('Success, image uploaded: ' + url)
            }).catch((err) => {
                // Handle upload error
                console.log(err)
            });
            
        });

        
    }
    render() {

        return (
                <FileUpload handleUpload={this.handleUpload} />
        )
    }
}

export default FileUploadContainer