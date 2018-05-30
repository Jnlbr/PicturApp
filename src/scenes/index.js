import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import Home from './Home';

const styles = {
    root: {
        flexGrown: 1,
    },
    main: {
        marginTop: 10,
    }
}

class Main extends Component {

    render() {
        const { classes } = this.props

        return (
            <div className={classes.root}>
                <AppBar />
                <div className={classes.main}> 
                    <Home />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Main)