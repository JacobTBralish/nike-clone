import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateUser, logOut } from './../../Redux/reducer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './tempNavStyle.scss'

import NikeSwoosh from '../../NikeSwoosh.svg'

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            user: '',

        }
    }
    componentDidMount(){
        // console.log('comp fired')
        this.props.updateUser()

    }
    login = () => {
        
        const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`);
        window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
    }

    logout = () => {
        axios.post('/api/logout').then(res => {
            console.log(res.data)
            this.props.logOut(this.props.user);
        })
    }



    // handleLogin = (e) => {
    //     console.log('Check')
    // }
    render() {
        const { user } = this.props
        console.log('user: ', user);

        return (
            <div className='navTest'>
                <div>
                    <Link to='/nike/nike-plus'><button>Nike Plus</button></Link>
                    <Link to=''><button></button></Link>
                    <Link to=''><button></button></Link>
                    <Link to=''><button></button></Link>
                </div>
                <div>
                    <div><Link to='/'><img src={NikeSwoosh} id='nikeSwoosh'></img></Link></div>
                    <Link to='/'>Home</Link>
                    <Link to='/mensshoes'>Mens Shoes</Link>
                    {/* <button onClick={}>Log in / Register</button> */}
                    {user ? <li onClick={()=>this.logout()}><Link to='/'>Logout</Link></li> : <li onClick={() => {this.login()}}>Login / Register</li>}
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return { 
        user: state.user 
    }
  }
  
  const mapDispatchToProps = {
    updateUser,
    logOut
  }
  
  
  export default connect( mapStateToProps, mapDispatchToProps)(Nav)