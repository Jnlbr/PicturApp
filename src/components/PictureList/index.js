import React, { Component } from 'react';
import Picture from '../Picture';
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
            });
        }).catch((error) => {
            console.log(error)
            // Handle error
        });
    }
    render() {
        const { pictures } = this.state;
        const _pictures = pictures.map((pic,i) => (
            <Picture key={i} data={{...pic}}/>
        ));

        return (
            <div>
                {_pictures}
            </div>
        );
    }
}

export default PictureList;