import React, { Component } from 'react';
import { updateUser, logOut } from '../../Redux/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import jumpman from '../../logos/air-jordan-logo.png'
import Converse from '../../logos/converse-logo.png'
import Hurley from '../../logos/Hurley.png'

class TopNav extends Component {

componentDidMount(){
    this.props.updateUser();
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
    render() {
        let { user } = this.props;
    return ( 
        <div>
            <div className='topNav'>
            <div className='leftNav'>
                <Link id='nikePlus' to='/nike/nike-plus'><button id='topNavButton'>Nike Plus</button></Link>
                <Link id='jordan' to='/nike/nike-plus'to=''><button id='topNavButton'><img id='jumpmanImg' src={jumpman}></img></button></Link>
                <Link id='hurley' to='/nike/nike-plus'to=''><button id='topNavButton'><img id='converseImg' src={Converse}></img></button></Link>
                <Link id='converse' to='/nike/nike-plus'to=''><button id='topNavButton'><img id='hurleyImg' src={Hurley}></img></button></Link>
            </div>
            <div className='rightList'>                
                {user ? <li onClick={()=>this.logout()}><Link to='/'>Logout</Link></li> : <li onClick={() => {this.login()}}>Join/Login In To Nike Plus Accout</li>}
                <li><Link to='/'>Help</Link></li>
                <li><Link to='/cart'><i class="fas fa-shopping-cart"></i></Link></li>
                <li></li>
            </div>
            </div>
        </div>
     );
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
 
export default connect(mapStateToProps, mapDispatchToProps)(TopNav);