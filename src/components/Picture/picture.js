import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { 
    Card, 
    CardHeader, 
    Avatar, 
    IconButton, 
    withStyles, 
    CardContent,
    CardMedia,
    CardActions,
    Typography,
    Collapse,
} from '@material-ui/core';
import Comment from './comment';

const styles = theme => ({
    root: {
        marginBottom: theme.spacing.unit * 2,
    },
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
})

const Picture = ({ classes, picture, handleComment, handleTextChange, handleExpandClick, expanded, loadingComments, comments }) => {

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    title={picture.displayName}
                    avatar={
                        <Avatar
                            src={picture.photoURL}
                            alt={picture.displayName}
                            aria-label="Recipe" />
                    }
                    /* action={
                        <IconButton> P </IconButton>
                    } */
                />
                <CardMedia
                    className={classes.media}
                    image={picture.url}
                />
                <CardContent>
                    <Typography>
                        {picture.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="Show comments"
                    > { loadingComments && "..." /* Some transition */} 
                    </IconButton>                                     
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <input type="text" onChange={handleTextChange} />
                    <button onClick={handleComment}> Comment </button>
                    {expanded &&
                        comments.map((comment,i) => 
                            <Comment key={i} data={comment}/>
                        )
                    }
                </Collapse>
            </Card>
        </div>
    )
}

Picture.propTypes = {
    classes: PropTypes.object.isRequired,
    picture: PropTypes.object.isRequired,
    handleComment: PropTypes.func.isRequired,
    handleExpandClick: PropTypes.func.isRequired,
    handleTextChange: PropTypes.func.isRequired,
    expanded: PropTypes.bool.isRequired,
    loadingComments: PropTypes.bool.isRequired,
    comments: PropTypes.array.isRequired,
}

export default withStyles(styles)(Picture)