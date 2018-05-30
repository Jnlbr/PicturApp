import AppBar from './appBar';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLogged: state.auth.isLogged,
})

const AppBarContainer = connect(mapStateToProps)(AppBar);

export default AppBarContainer