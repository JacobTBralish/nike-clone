import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Link to='/'>Home</Link>
                <Link to='/mensshoes'>Mens Shoes</Link>
            </div>
         );
    }
}
 
export default Home;