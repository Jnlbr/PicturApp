import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#B3E5FC',
        },
        secondary: {
            main: '#000000',
        },
    }
});

function withRoot(Component) {
    function WithRoot(props) {

        // It uses react context
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...props} />
            </MuiThemeProvider>
        );
    }
    return WithRoot;
}

export default withRoot
