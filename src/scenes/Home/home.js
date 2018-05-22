import React from 'react';
import { GoogleCredentials, LogoutButton, Pictures, FileUpload } from '../../components';

const Home = ({...props, isLogged}) => (
    <div>
        <h1> Is logged? {String(isLogged)} </h1>
        <GoogleCredentials />
        <LogoutButton />
        <FileUpload />
        <Pictures />
        
    </div>
);

export default Home