import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleCredentials, LogoutButton, Pictures, FileUpload } from '../../components'

class Home extends Component {
    
    render() {
        
        return (
            <div>
                <GoogleCredentials />
                <LogoutButton />
                <FileUpload />
                <Pictures />
                <h1> Is logged? {String(this.props.logged)} </h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    logged: state.logged,
});

export default connect(mapStateToProps)(Home)