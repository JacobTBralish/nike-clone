import React, { Component } from 'react'
import axios from 'axios';
import { getReviews, deleteReviews, editReviews, createReview, } from '../../Redux/reducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Review from './../Review/Review';

class ReviewWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewTitle: '',
            body: '',
            stars: '',
         }
    }

    componentDidMount() {
        this.props.getReviews(this.props.match.params.id)
        // console.log('this.props.match.params.id: ', this.props.match.params.id);
    }
    toggleEdit = () => {
        this.setState((prevState) =>{
        //  console.log('prevstate', prevState)
            return {
                toggleValue: !prevState.toggleValue,
            }
         })
     }

     handleDelete = (reviewId) => {
        // console.log('CLICKED', deletedId)
        // console.log('handleDelete === this.props.title', this.props.location.state.title)
        // console.log('handleDelete === reviewId', reviewId)
        axios.delete(`/api/reviews/${this.props.match.params.id}?reviewId=${reviewId}`)
        .then(response => {
            // console.log('handleDelete response', response)
            // console.log('handleDelete response.data', response.data)
            this.props.deleteReviews(response.data)
            })  
        .catch(error => console.log('handleDelete', error))
        this.props.history.push(`/product/${encodeURI(this.props.product[0].title)}`)
    }
 
  fireReview = (poster_id, itemName, reviewTitle, body, stars) => {
    // e.preventDefault();
    let date = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let dateval = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    
    console.log('dateval', dateval, 'shoeName', itemName, 'title:',reviewTitle, 'body:',body, 'stars:',stars, 'poster_id:',poster_id)
    
        axios.post(`/api/reviews`, {poster_id, itemName, reviewTitle, body, stars, dateval})
            .then(response => {
            console.log('fireReview response =====>', response)
            this.props.createReview(response.data)
            })
        .catch(error => console.log('handleDelete', error))
    }


 


    onChange = (e) => {
        // console.log(e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        console.log('Reviews in RevoewWrapper',this.props.reviews)
        // const data = this.props.reviews.length > 0 ? this.props.reviews[0]: {}
        let { reviewTitle, body, stars } = this.state
        let { user, itemName, reviews, product } = this.props;
        console.log('prooduct', product);

        let reviewList = reviews.map((review, index) => {
            console.log('review: ', review);
            let { name, body, title, dateval, stars, id, poster_id} = review
            return <Review key={index} editReviews={this.props.editReviews} handleDelete={this.handleDelete} product={product} posterName={name} body={body} title={title} dateval={dateval} itemName={product[0].title} stars={stars} reviewId={id} user={this.props.user} poster={poster_id} />
        })
        
        console.log('reviewList: ', reviewList);
        return (
            <div>
                    <label >Title</label>
                    <input type="text" name="reviewTitle" value={reviewTitle} onChange={this.onChange}></input>
                    <div>
                        <label>Body</label>
                        <input type="text" name="body" value={body} onChange={this.onChange}></input>
                    </div>
                    <div>
                        <label>Stars</label>
                        <select name='stars' onChange={this.onChange}>
                            <option>Rating</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>

                        <button type="submit" onClick={() => this.fireReview(user.id, product[0].title, reviewTitle, body, stars)}>Submit</button>                
                    </div>  
                    {reviewList}
                </div>  
             
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.product,
        reviews: state.reviews,
        user: state.user
    }
}
  
const mapDispatchToProps = {
    getReviews,
    deleteReviews,
    editReviews,
    createReview,
  };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewWrapper));