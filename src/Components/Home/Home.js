import React, { Component } from 'react';
import axios from 'axios';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        axios.get('https://www.nike.com/us/en_us/retail/en/api/v2/stores.json').then(response => {
            console.log(response.data.stores[0].latitude);
            console.log(response.data.stores[0].longitude);
        })
    }
    render() { 
        return ( 
            <div>
               

            </div>
         );
    }
}
 
export default Home;