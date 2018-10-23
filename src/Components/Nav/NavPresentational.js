import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateUser, logOut } from './../../Redux/reducer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './tempNavStyle.scss'

import NikeSwoosh from '../../logos/NikeSwoosh.svg'
import jumpman from '../../logos/air-jordan-logo.png'
import Converse from '../../logos/converse-logo.png'
import Hurley from '../../logos/Hurley.png'

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
        // console.log('user: ', user);

        return (
            <span className='navTest'>
                <div className='topNav'>
                    <Link id='nikePlus' to='/nike/nike-plus'><button id='topNavButton'>Nike Plus</button></Link>
                    <Link id='jordan' to='/nike/nike-plus'to=''><button id='topNavButton'><img id='jumpmanImg' src={jumpman}></img></button></Link>
                    <Link id='hurley' to='/nike/nike-plus'to=''><button id='topNavButton'><img id='converseImg' src={Converse}></img></button></Link>
                    <Link id='converse' to='/nike/nike-plus'to=''><button id='topNavButton'><img id='hurleyImg' src={Hurley}></img></button></Link>
                    {user ? <li onClick={()=>this.logout()}><Link to='/'>Logout</Link></li> : <li onClick={() => {this.login()}}>Join/Login In To Nike Plus Accout</li>}

                </div>
                <div className='middleNav'>
                    <div className='swooshDiv'>
                        <Link to='/'><img src={NikeSwoosh} id='nikeSwoosh'></img></Link>
                    </div>
                    <div>
                        <div class="dropdown">
                            <Link to='/mensshoes' class="dropbtn">MEN</Link>
                            <div class="dropdown-content">
                                <Link to='/mensshoes'>SHOES</Link>
                                <Link to='/'>SNKRS Launch Calender</Link>
                                    <Link to='/'>Lifestyle</Link>
                                    <Link to='/'>Running</Link>
                                    <Link to='/'>Training & Gym</Link>
                                    <Link to='/'>BasketBall</Link>
                                    <Link to='/'>Jordan</Link>
                                    <Link to='/'>Football</Link>
                                    <Link to='/'>Soccer</Link>
                                    <Link to='/'>Baseball</Link>
                                    <Link to='/'>Golf</Link>
                                    <Link to='/'>Skateboarding</Link>
                                    <Link to='/'>Tennis</Link>
                                    <Link to='/'>Boots</Link>
                                    <Link to='/mensshoes'>All Shoes</Link>
                            </div>
                            <div class="dropdown-content">
                                <Link to='/'>CLOTHING</Link>
                                    <Link to='/'>SNKRS Launch Calender</Link>
                                    <Link to='/'>Lifestyle</Link>
                                    <Link to='/'>Running</Link>
                                    <Link to='/'>Training & Gym</Link>
                                    <Link to='/'>BasketBall</Link>
                                    <Link to='/'>Jordan</Link>
                                    <Link to='/'>Football</Link>
                                    <Link to='/'>Soccer</Link>
                                    <Link to='/'>Baseball</Link>
                                    <Link to='/'>Golf</Link>
                                    <Link to='/'>Skateboarding</Link>
                                    <Link to='/'>Tennis</Link>
                                    <Link to='/'>Boots</Link>
                                    <Link to='/'>All Shoes</Link>
                                <Link to='/'>ACCESSORIES & EQUIPMENT</Link>
                                    <Link to='/'>Bags & Backpacks</Link>
                                    <Link to='/'>Hats</Link>

                            </div>
                            <div class="dropdown-content">
                                <Link to='/'>SHOP COLLECTION</Link>
                                    <Link to='/'>Tops & T-Shirts</Link>
                                    <Link to='/'>Shorts</Link>
                                    <Link to='/'>Polos</Link>
                                    <Link to='/'>Hoodies & Sweatshirts</Link>
                                    <Link to='/'>Jackets & Vests</Link>
                                    <Link to='/'>Pants & Tights</Link>
                                    <Link to='/'>Surf & Swimwear</Link>
                                    <Link to='/'>Nike Pro & Compression</Link>
                                    <Link to='/'>Socks & Underwear</Link>
                                    <Link to='/'>Big & Tall</Link>
                                    <Link to='/'>All Clothing</Link>

                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">WOMEN</button>
                            <div class="dropdown-content">
                                <Link to='/'></Link>
                                <Link to='/'></Link>
                                <Link to='/'></Link>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">KIDS</button>
                            <div class="dropdown-content">
                                <Link to='/'></Link>
                                <Link to='/'></Link>
                                <Link to='/'></Link>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">FAVORITES</button>
                            <div class="dropdown-content">
                                <Link to='/'></Link>
                                <Link to='/'></Link>
                                <Link to='/'></Link>
                            </div>
                        </div>
                    </div>
                    <div className='searchInput'>
                        <input placeHolder='Search' id='navSearchBar'></input>
                    </div>
                </div>
            </span>
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