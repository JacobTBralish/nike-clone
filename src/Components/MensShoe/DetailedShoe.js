import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { addToCart, getReviews, deleteReviews, editReviews, createReview, selectedProduct } from './../../Redux/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ReviewWrapper from './../ReviewWrapper/ReviewWrapper'

class DetailedShoe extends Component {
    constructor(props) {
        super(props);
    }



    componentDidMount() {
    this.props.selectedProduct(this.props.product)
    } 

    handleDelete = (reviewId) => {
        // console.log('CLICKED', deletedId)
        // console.log('handleDelete === this.props.title', this.props.location.state.title)
        console.log('handleDelete === reviewId', reviewId)
        axios.delete(`/api/reviews/${this.props.location.state.title}?reviewId=${reviewId}`)
        .then(response => {
            // console.log('handleDelete response', response)
            console.log('handleDelete response.data', response.data)
            this.props.deleteReviews(response.data)
            })  
        .catch(error => console.log('handleDelete', error))
        this.props.history.push(`/product/${encodeURI(this.props.location.state.title)}`)
    }

    render() {
        let { addToCart, total, product } = this.props;
        console.log('product: ', product);

        let mappedProduct = product.length ? product.map((detail, index) => {
            let { spriteSheet, title, localPrice, subtitle } = detail;
            return <div key={index}>
                <img src={spriteSheet} alt={detail.title}></img>
                <p>{title}</p>
                <p>{localPrice}</p>
                <p>{subtitle}</p>
            </div>
        }) : 'Loading...'

        return ( 
            <div>
                <div><Link to='/mensshoes'>Back to Shoes</Link></div>
                {mappedProduct}
                <button onClick={() => addToCart(product, total)}>Add To Cart</button>
                <Link to={{pathname:`/cart`, state:{product}}}>To Cart</Link>
                <div>
                    <ReviewWrapper />
                </div>
                </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        item: state.cart,
        user: state.user,
        total: state.total,
        product: state.product,
        reviews: state.reviews
        }
}
  
const mapDispatchToProps = {
    getReviews,
    deleteReviews,
    editReviews,
    createReview,
    addToCart,
    selectedProduct
  };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailedShoe));