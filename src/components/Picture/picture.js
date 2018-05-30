import React from 'react';

const Picture = ({ handleComment, handleTextChange, url, title }) => {
    return (
        <div>
            <img
                width="450"
                height="350"
                src={url}
                alt={title}
            />
            <input type="text" onChange={handleTextChange}/>
            <button onClick={handleComment}> Comment </button>
        </div>
    )
}

export default Picture