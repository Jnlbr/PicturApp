import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

const styles = {
    header: {
        
    }
}

const _AppBar = ({classes, ...props}) => (
    <AppBar position="static" color="default">
        <Toolbar>
            <Typography variant="title" color="inherit">
                Instagram
            </Typography>
        </Toolbar>
    </AppBar>
)

export default withStyles(styles)(_AppBar)