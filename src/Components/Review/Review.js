import React, { Component } from 'react'
import axios from 'axios';

export default class Review extends Component {
    constructor () {
        super();
        this.state = {
            toggleValue: false,
            Title: '',
            Body: '',
            Stars: 0,
        }
        this.toggleEdit = this.toggleEdit.bind(this)
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

    onChange = e => {
        // console.log(e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value});
      }

    // componentDidMount() {
    //     console.log('GOING UP ON A FREAKING TUESDAy')
    // }

    render() {
        const {user, posterName, poster, body, dateval, title, stars, reviewId, handleDelete, handleEdit} = this.props
        // console.log('revId', reviewId, 'posId', poster)
        // console.log('REVIEWS THIS.PROPS ===>', this.props)
        const {toggleValue, Title, Body, Stars} = this.state
        
        return (
            <div>
                <h1>HELLO</h1>
                { !toggleValue 
                ?
                <div> {/* ------------ DISPLAY REVIEW ----------- */}
                    <span>{dateval}</span>
                    <h1>{title}</h1>
                    <p>Rating: {stars}/5</p>
                    <p>{posterName}</p>
                    <p>{body}</p>

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
                        <input type="text" name="Title" value={Title} onChange={this.onChange}></input>
                    </div>
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
                    </div>
                    <div>
                    <button onClick={() => {this.props.handleDelete(reviewId)
                        this.toggleEdit()
                        }}>Delete</button>
                <button onClick={() => {
                    handleEdit(Title, Body, Stars, reviewId)
                    this.toggleEdit()}}>Submit</button>
                    <button onClick={() => this.toggleEdit()}>Cancel</button>
                    </div>
                </div>
                } {/* END TOGGLE VIEW */}
            </div>
        )
    }
}
