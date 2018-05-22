import React from 'react';

const FileUpload = ({handleUpload, ...props}) => (
    <input 
        type="file" 
        accept=".png, .gif, .jpeg, .jpeg" 
        onChange={handleUpload} 
    />
)

export default FileUpload