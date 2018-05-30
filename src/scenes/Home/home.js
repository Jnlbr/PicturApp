import React from 'react';
import PictureList from '../../components/PictureList';
import FileUpload from '../../components/FileUpload';

const Home = ({ isLogged }) => (
    <div>
        <h1> Is logged? {String(isLogged)} </h1>
        <FileUpload />
        <PictureList />
    </div>
);

export default Home