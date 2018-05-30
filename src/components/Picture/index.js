import React, { Component } from 'react';
import Picture from './picture';
import PropTypes from 'prop-types';
import { doComment, getComments } from '../../api';

class PictureContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            picture: {...props.data},
            comments: [],
            text: '',
            expanded: false,
            loadingComments: false,          
        }
    }
    handleTextChange = (event) => {
        this.setState({ text: event.target.value });
    }
    handleComment = () => {
        const { text, picture } = this.state;
        doComment(picture.id, text).then(() => {
            console.log('Success')
            // Handle comment success
        }).catch((error) => {
            console.log(error);
            // Handle error
        });
    }
    handleExpandClick = () => {
        const { expanded } = this.state;
        if(expanded) {
            this.setState({ expanded: false });
        } else {
            this.setState({ loadingComments: true })
            this.searchComment();
        }
    }
    searchComment = () => {
        const { id } = this.state.picture;
        getComments(id).then((comments) => {
            this.setState({
                loadingComments: false,
                expanded: true,
                comments: comments
            });
        }).catch((error) => {
            this.setState({
                loadingComments: false,
            });
        });
    }

    render() {
        const { expanded, comments, loadingComments, picture } = this.state;

        return <Picture
            handleTextChange={this.handleTextChange}
            handleComment={this.handleComment}
            handleExpandClick={this.handleExpandClick}
            picture={picture}
            expanded={expanded}
            comments={comments}
            loadingComments={loadingComments}
        />
    }
}

PictureContainer.propTypes = {
    data: PropTypes.object.isRequired,
}

export default PictureContainer