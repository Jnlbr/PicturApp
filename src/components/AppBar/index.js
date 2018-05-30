import React, { Component } from 'react';
import AppBar from './appBar';
import { connect } from 'react-redux';

class AppBarContainer extends Component {
    
    render() {
        console.log(this.props.isLogged)

        return <AppBar isLogged={this.props.isLogged} />
        
    }
}

const mapStateToProps = state => ({
    isLogged: state.auth.isLogged,
})

export default connect(mapStateToProps)(AppBarContainer)