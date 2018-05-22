import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isLogged } from '../../store/actions';
import LogoutButton from './logoutButton';
import { logOut } from '../../api'

class LogoutButtonContainer extends Component {
    handleClick = () => {
        let { isLogged } = this.props;
                
        logOut().then(() => {
            isLogged(false);
        }).catch((error) => {
            // Handle error
        })
    }
    render() {

        return <LogoutButton handleClick={this.handleClick} />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isLogged: is => {
            dispatch(isLogged(is));
        }
    }
}

export default connect(null,mapDispatchToProps)(LogoutButtonContainer)