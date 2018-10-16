import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { addToCart } from './../../Redux/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DetailedShoe extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

 
    render() {
        let {price, title, category, productImg} = this.props.location.state;
        console.log('u7ser', this.props.user)
        let {user} = this.props;
        console.log('this.props.location.sta: ', this.props.location.state);
        return ( 
            <div>
                <img src={productImg} alt={title}></img>
                <p>{title}</p>
                <p>{price}</p>
                <p>{category}</p>

                Detailed shoe
                <button onClick={() => this.props.addToCart(title)}>Add To Cart</button>
                {/* <Link to={`/cart/${user.id}`}></Link> */}
            </div>
         );
    }
}


const mapStateToProps = state => {
    return {
        cart: state.cart,
        user: state.user
        }
}

 
export default withRouter(connect(mapStateToProps, {addToCart})(DetailedShoe));