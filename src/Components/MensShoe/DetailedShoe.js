import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class DetailedShoe extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

 
    render() {
        let {price, title, category, productImg} = this.props.location.state;
        console.log('this.props.location.sta: ', this.props.location.state);
        return ( 
            <div>
                <img src={productImg} alt={title}></img>
                <p>{title}</p>
                <p>{price}</p>
                <p>{category}</p>

                Detailed shoe
            </div>
         );
    }
}
 
export default withRouter(DetailedShoe);