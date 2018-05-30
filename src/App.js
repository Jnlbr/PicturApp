import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from './api/firebase';
import Main from './scenes';
import { isAuth } from './store/actions/user';
import withRoot from './util/withRoot';

class AppContainer extends Component {    
    componentDidMount() {
        let { isAuth } = this.props;
        auth.onAuthStateChanged((user) => {
            if (user) {
                isAuth(true);
            } else {
                console.log('Is not authenticated');
                isAuth(false);
            }
        })
    }
    render() {
        return <Main />
    }
}


const mapDispatchToProps = dispatch => {
    return {
        isAuth: is => {
            dispatch(isAuth(is))
        }
    }
}
const App = connect(
    null, 
    mapDispatchToProps
)(AppContainer);

export default withRoot(App);