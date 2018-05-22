import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './home'

class HomeContainer extends Component {
    
    render() {
        console.log(this.props)
        
        return <Home isLogged={this.props.isLogged}/>
    }
}

const mapStateToProps = state => {
    let { isLogged } = state.auth
    return {
        isLogged: isLogged,
    }
}

export default connect(mapStateToProps)(HomeContainer)