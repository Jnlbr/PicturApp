import React, { Component } from 'react';
import Picture from './picture';
import { doComment } from '../../api';

class PictureContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            picture: {...props},
            comment: '',
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

    render() {
        const { url, title } = this.state.picture; // For now
        
        return <Picture
            handleTextChange={this.handleTextChange}
            handleComment={this.handleComment} 
            url={url} 
            title={title}
        />
    }
}

export default PictureContainer