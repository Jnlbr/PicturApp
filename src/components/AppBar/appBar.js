import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import Google from '../Login/googleContainer';
import Logout from '../Logout'

const styles = {
    header: {
        display: 'flex',
        flexGrow: 1,
        justifyContent:'space-between',
        alignItems:'center',
    },
}

const _AppBar = ({ isLogged, classes }) => (
    <AppBar position="static" color="default">
        <Toolbar>
            <div className={classes.header}>
                <Typography variant="title" color="inherit">
                    Instagram
                </Typography>
                {/* Change this */}
                {(isLogged) ? (
                    <Logout /> ) : (
                    <Google />
                )}
            </div>
        </Toolbar>
    </AppBar>
)

export default withStyles(styles)(_AppBar)