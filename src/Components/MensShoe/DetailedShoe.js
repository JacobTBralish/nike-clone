import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class DetailedShoe extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            shoe: []
         }
    }

    componentDidMount(props) {
        // let { geturl } = props.location.state
        // console.log('geturl: ', geturl);
        axios.get('https://api-2.curalate.com/v1/media/jeuMopdGNhbROayz?appId=curalate&locale=en-us&limit=8&sort=Moderation&fpcuid=46e8ecc7-4c4c-48b1-a6d9-2c70d7e16f2b&rid=45bdc69b-4b86-4e8c-85a9-c92cc1d29091&filter=productId%3AAQ8810', {headers: {
            'Access-Control-Allow-Origin': '*'
        }}).then(response => {
            console.log('response: ', response.data);
            this.setState({
                shoe: response.data
            })
        }).catch(error => {
            console.log(error);
        })
    }
    render() { 
        return ( 
            <div>
                Detailed shoe
            </div>
         );
    }
}
 
export default withRouter(DetailedShoe);