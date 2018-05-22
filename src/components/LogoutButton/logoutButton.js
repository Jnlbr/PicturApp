import React from 'react';

const LogoutButton = ({handleClick, ...props}) => {

    return (
        <button onClick={handleClick}>LOGOUT</button>
    )
}

export default LogoutButton