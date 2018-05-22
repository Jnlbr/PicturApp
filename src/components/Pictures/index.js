import React, { Component } from 'react';
import Pictures from './pictures';
import { getPictures } from '../../api'

class PicturesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
        }
    }
    componentDidMount() {
        getPictures().then((pics) => {
            pics.forEach((picture) => {
                this.setState((prevState) => ({
                    images: [picture.data(), ...prevState.images],
                }));
            });
        }).catch((error) => {
            console.log(error)
            // Handle error
        })
    }
    render() {
        return (
            <Pictures 
                images={this.state.images}
            />
        );
    }
}

export default PicturesContainer;