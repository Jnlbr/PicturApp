import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    Avatar,
    withStyles,
    CardContent,
    Typography,
} from '@material-ui/core';

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
})

const Comment = ({classes, data}) => {
    
    return (
        <Card className={classes.card}>
            <CardHeader
                title={data.displayName}
                avatar={
                    <Avatar
                        src={data.photoURL}
                        alt={data.displayName}
                        aria-label="Recipe" 
                    />
                }
            />
            <CardContent>
                <Typography component="p">
                    {data.commentText}
                </Typography>
            </CardContent>
        </Card>
    );
}

Comment.propType = {
    classes: PropTypes.object,
    data: PropTypes.object.isRequired,
}

export default withStyles(styles)(Comment);