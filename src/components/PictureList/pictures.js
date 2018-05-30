import React from 'react';
import Picture from '../Picture';

const Pictures = ({ pictures }) => {
    
    const _pictures = pictures.map((pic,i) => (
        <Picture key={i} { ...pic }/>
    ))

    return (
        <div>
            { _pictures }
        </div>
    )
}

export default Pictures