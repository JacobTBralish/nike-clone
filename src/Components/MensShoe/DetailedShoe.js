import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { addToCart, getReviews, deleteReviews, editReviews, createReview } from './../../Redux/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ReviewWrapper from './../ReviewWrapper/ReviewWrapper'

class DetailedShoe extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.props.getReviews(this.props.location.state.title)
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
        console.log('this.props.location.state', this.props.location)
        let {price, title, category, productImg } = this.props.location.state;
        // let { Title, Body, Stars } = this.state
        let { addToCart, total, setTotal, user, reviews,  } = this.props;
        console.log('Reviews in Review component', reviews)
        // console.log(this.props.globalReviews)
        return ( 
            <div>
                <div><Link to='/mensshoes'>Back to Shoes</Link></div>
                <img src={productImg} alt={title}></img>
                <p>{title}</p>
                <p>{price}</p>
                <p>{category}</p>
                <button onClick={() => addToCart({title, category, price, productImg}, total)}>Add To Cart</button>
                <Link to={{pathname:`/cart`, state:{title: title, category: category, price: price, productImg: productImg}}}>To Cart</Link>
                <ReviewWrapper  handleDelete={this.handleDelete} getReviews={this.props.getReviews} deleteReviews={this.props.deleteReviews} editReviews={this.props.editReviews} createReview={this.props.createReview} itemName={title} reviews={reviews} user={user}/>

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
        reviews: state.reviews
        }
}
  
const mapDispatchToProps = {
    getReviews,
    deleteReviews,
    editReviews,
    createReview,
    addToCart
  };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailedShoe));