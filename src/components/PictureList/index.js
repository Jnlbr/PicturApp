import React, { Component } from 'react';
import Pictures from './pictures';
import { getPictures } from '../../api'

class PictureList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pictures: [],
        }
    }
    componentDidMount() {
        getPictures().then((pictures) => {
            this.setState({
                pictures: pictures
            })
        }).catch((error) => {
            console.log(error)
            // Handle error
        })
    }
    render() {
        
        return (
            <div>
                <Pictures
                    pictures={this.state.pictures}
                />
            </div>
        );
    }
}

export default PictureList;