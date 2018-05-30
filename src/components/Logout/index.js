import React, { Component } from 'react';
import Logout from './logout';
import { logOut } from '../../api'

class LogoutContainer extends Component {
    handleClick = () => {            
        logOut().then(() => {
            // Handle success, send redirect or something
        }).catch((error) => {
            // Handle error
        })
    }
    render() {

        return <Logout handleClick={this.handleClick} />
    }
}

export default LogoutContainer