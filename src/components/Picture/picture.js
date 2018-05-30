import React from 'react';
import classnames from 'classnames';
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

const Picture = ({ classes, handleComment, handleTextChange, handleExpandClick, comments, ...props }) => {
    
    console.log(comments)
    const _comments = comments.forEach(comment => {
        console.log(comment.commentText)
    });

    console.log(_comments)
    
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    title={props.displayName}
                    avatar={
                        <Avatar
                            src={props.photoURL}
                            alt={props.displayName}
                            aria-label="Recipe" />
                    }
                    action={
                        <IconButton> P </IconButton>
                    }
                />
                <CardMedia
                    className={classes.media}
                    image={props.url}
                />
                <CardContent>
                    <Typography>
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: props.expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={props.expanded}
                        aria-label="Show more"
                    >                        
                    </IconButton>                                     
                </CardActions>
                <Collapse in={props.expanded} timeout="auto" unmountOnExit>
                    { _comments }
                    {/* <input type="text" onChange={handleTextChange} />
                    <button onClick={handleComment}> Comment </button> */}
                </Collapse>
            </Card>
        </div>
    )
}


export default withStyles(styles)(Picture)