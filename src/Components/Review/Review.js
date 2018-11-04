import React, { Component } from 'react'
import axios from 'axios';
import './../ReviewWrapper/ReviewWrapper.scss'

export default class Review extends Component {
    constructor () {
        super();
        this.state = {
            toggleValue: false,
            newReviewTitle: '',
            newBody: '',
            stars: '',
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    
    handleEdit = (title, body, stars, id, itemName) => {
        // console.log('CLICKED', itemName, title, body, stars, id)
        axios.put(`/api/reviews/`, { title, body, stars, id, itemName })
        .then(response => {
            // console.log('handleEdit response ======>', response)
            this.props.editReviews(response.data)
            this.props.history.push(`/api/reviews/${this.props.match.props.id}`)
        })
        .catch(error => console.log('handleDelete', error))
    }

    toggleEdit = () => {
        this.setState((prevState) =>{
        //  console.log('prevstate', prevState)
            return {
                toggleValue: !prevState.toggleValue,
            }
         })
     }

    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value});
      }

    handleRating = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({stars: e.target.value});
      }

    // componentDidMount() {
    //     console.log('GOING UP ON A FREAKING TUESDAy')
    // }

    render() {
        const {user, posterName, poster, body, dateval, title, stars, reviewId, handleDelete, handleEdit, product} = this.props
        // console.log('revId', reviewId, 'posId', poster)
        // console.log('REVIEWS THIS.PROPS ===>', product[0].title, this.state.newReviewTitle, this.state.newBody, this.state.stars, reviewId)
        const {toggleValue, newBody, newReviewTitle} = this.state
        
        return (
            <div>
                { !toggleValue 
                ?
                <div className="singleReviewWrapper"> {/* ------------ DISPLAY REVIEW ----------- */}
                    <div className="singleReviewInner">
                        {/* <span>{dateval}</span> */}
                        <h1>{title}</h1>
                        <p>Rating: {`${stars}/5`}</p>
                        <p>{posterName}</p>
                        <p>{body}</p>
                    </div>

                {  user.id === poster 
                ?
                <div>
                    <button onClick={() => this.toggleEdit()}>Edit</button>
                </div>
                : null
                }
                </div>
                : <div> {/* ---------- EDIT REVIEW ----------- */}
                    <div>
                        <label>Title</label>
                        <input type="text" name="newReviewTitle" value={newReviewTitle} onChange={this.onChange}></input>
                    </div>
                        <div>
                        <label>Body</label>
                        <textarea type="text" name="newBody" value={newBody} onChange={this.onChange}></textarea>
                    </div>
                    <div>
                        <label>Stars</label>
                        <select name='stars' onChange={this.handleRating}>
                            <option>Rating</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                    </select>
                    </div>
                    <div>
                    <button onClick={() => {this.props.handleDelete(reviewId)
                        this.toggleEdit()
                        }}>Delete</button>
                <button onClick={() => {
                    this.handleEdit( newReviewTitle, newBody, stars, reviewId, product[0].title)
                    this.toggleEdit()}}>Submit</button>
                    <button onClick={() => this.toggleEdit()}>Cancel</button>
                    </div>
                </div>
                } {/* END TOGGLE VIEW */}
            </div>
        )
    }
}
