import React from 'react';
import Button from '@material-ui/core/Button';

const Logout = ({handleClick, ...props}) => {

    return (
        <Button onClick={handleClick}>LOGOUT</Button>
    )
}

export default Logout