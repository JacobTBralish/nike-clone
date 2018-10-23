import React, { Component } from 'react'
import axios from 'axios';

import { withRouter } from 'react-router-dom'
import Review from './../Review/Review';

class ReviewWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Body: '',
            Stars: 0,
         }
         this.onChange = this.onChange.bind(this)
    }
    toggleEdit = () => {
        this.setState((prevState) =>{
        //  console.log('prevstate', prevState)
            return {
                toggleValue: !prevState.toggleValue,
            }
         })
     }
  fireReview = (itemName, title, body, stars, poster_id) => {
    // e.preventDefault();
    let date = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let dateval = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    
    console.log('dateval', dateval, 'shoeName', itemName, 'title:',title, 'body:',body, 'stars:',stars, 'poster_id:',poster_id)
    
    axios.post(`/api/reviews`, {itemName, title, body, stars, poster_id, dateval})
    .then(response => {
        console.log('fireReview response =====>', response)
        this.props.createReview(response.data)
    })
    .catch(error => console.log('handleDelete', error))
}


handleEdit = (itemName, title, body, stars, id) => {
    console.log('CLICKED', id, title, body, stars)
    axios.put(`/api/reviews/${this.props.match.params.id}`, {itemName, title, body, stars, id})
    .then(response => {
        console.log('handleEdit response ======>', response)
        this.props.editReviews(response.data)
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
        let { Title, Body, Stars } = this.state
        let { user, itemName, reviews } = this.props;
        let reviewList = reviews.map((review, index) => {
            let { name, body, title, dateval, itemName, stars, id, poster_id} = review
            return <Review key={index} handleDelete={this.props.handleDelete} handleEdit={this.handleEdit} posterName={name} body={body} title={title} dateval={dateval} itemName={itemName} stars={stars} reviewId={id} user={this.props.user} poster={poster_id} />
        })

        return (
            <div>
                    <label >Title</label>
                    <input type="text" name="Title" value={Title} onChange={this.onChange}></input>
                    <div>
                        <label>Body</label>
                        <input type="text" name="Body" value={Body} onChange={this.onChange}></input>
                    </div>
                    <div>
                        <label>Stars</label>
                        <select name='Stars' onChange={this.onChange}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>

                        <button type="submit" onClick={() => this.fireReview(itemName, Title, Body, Stars, user.id)}>Submit</button>                
                    </div>  
                    {reviewList}
                </div>  
             
        )
    }
}

export default withRouter(ReviewWrapper)