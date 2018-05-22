import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { isAuth } from '../../store/actions/user';
import LogoutButton from './logoutButton';
import { logOut } from '../../api'

class LogoutButtonContainer extends Component {
    handleClick = () => {            
        logOut().then(() => {
            // Handle success, send redirect or something
        }).catch((error) => {
            // Handle error
        })
    }
    render() {

        return <LogoutButton handleClick={this.handleClick} />
    }
}

export default LogoutButtonContainer