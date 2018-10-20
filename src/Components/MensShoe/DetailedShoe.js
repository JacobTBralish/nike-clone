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
        let {price, title, category, productImg } = this.props.location.state;
        

        let { addToCart, total, setTotal } = this.props;
        

        return ( 
            <div>
                <div><Link to='/mensshoes'>Back to Shoes</Link></div>
                <img src={productImg} alt={title}></img>
                <p>{title}</p>
                <p>{price}</p>
                <p>{category}</p>

                <button onClick={() => addToCart({title, category, price, productImg}, total)}>Add To Cart</button>
                <Link to={{pathname:`/cart`, state:{title: title, category: category, price: price, productImg: productImg}}}>To Cart</Link>
                </div>
         );
    }
}


const mapStateToProps = state => {
    return {
        cart: state.cart,
        item: state.cart,
        user: state.user,
        total: state.total
        }
}

 
export default withRouter(connect(mapStateToProps, {addToCart})(DetailedShoe));