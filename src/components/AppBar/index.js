import React, { Component } from 'react';
import AppBar from './appBar';
import { connect } from 'react-redux';

class AppBarContainer extends Component {
    // state = {
    //     isLogged: false,
    // }
    // componentWillReceiveProps(nextProps) {

    // }
    render() {

        return <AppBar />
        
    }
}

const mapStateToProps = state => ({
    logged: state.logged,
})

export default connect(mapStateToProps)(AppBarContainer)