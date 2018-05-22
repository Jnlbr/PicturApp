import React, { Component } from 'react';
import Google from './google';
import {connect} from 'react-redux';
import { isLogged } from '../../store/actions'
import { loginWith } from '../../api'

class GoogleContainer extends Component {

    handleClick = () => {
        let { isLogged } = this.props;

        loginWith('google').then(() => {
            isLogged(true);
        }).catch((error) => {
            // Handle error
        })
    }

    render() {

        return <Google handleClick={this.handleClick} />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isLogged: is => {
            dispatch(isLogged(is));
        },
    }
}


export default connect(null,mapDispatchToProps)(GoogleContainer);