import React, { Component } from 'react';
import Google from './google';
import {connect} from 'react-redux';
import { login } from '../../store/actions/user'

class GoogleContainer extends Component {

    handleLogin = () => {
        let { login } = this.props;
        login({
            provider: 'google',
            email: '',
            password: '',
        });
    }

    render() {

        return <Google handleLogin={this.handleLogin} />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (form) => {
            dispatch(login(form))
        }
    }
}


export default connect(null,mapDispatchToProps)(GoogleContainer);