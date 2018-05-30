import React, { Component } from 'react';
import Picture from './picture';
import { doComment } from '../../api';

class PictureContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            picture: {...props},
            comment: '',
            expanded: false,
        }
    }
    handleComment = () => {
        let { id } = this.state.picture;
        let comment = this.state.comment;

        doComment(id,comment).then(() => {
            console.log('Success')
            // Handle comment success
        }).catch((error) => {
            console.log(error);
            // Handle error
        })
    }
    handleTextChange = (event) => {
        this.setState({
            comment: event.target.value,
        });
    }
    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const { url, description, displayName, photoURL, comments } = this.state.picture; // For now
        
        return <Picture
            handleTextChange={this.handleTextChange}
            handleComment={this.handleComment}
            handleExpandClick={this.handleExpandClick}
            displayName={displayName}
            photoURL={photoURL}
            url={url} 
            description={description}
            comments={comments}
            expanded={this.state.expanded}
        />
    }
}

export default PictureContainer