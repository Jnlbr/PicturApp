import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from 'firebase/app';
import { Home } from './scenes';
import { isLogged } from './store/actions';

class App extends Component {
    componentDidMount() {
        let { isLogged } = this.props;
        auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user)
                isLogged(true);
            } else {
                console.log('Is not logged');
                isLogged(false);
            }
        })
    }
    render() {
        return (
            
            <Home />
        
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        isLogged: is => {
            dispatch(isLogged(is))
        }
    }
}

export default connect(null, mapDispatchToProps)(App);