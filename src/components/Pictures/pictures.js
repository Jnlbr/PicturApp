import React from 'react';

const Pictures = ({images, ...props}) => {

    const _images = images.map((img,i) => (
        <img key={i} src={img.image} alt={img.title}/>
    ))

    return (
        <div>
            {_images}
        </div>
    )
}

export default Pictures