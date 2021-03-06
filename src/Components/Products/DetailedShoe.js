import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import YouMightAlsoLike from '../YouMightAlsoLike/YouMightAlsoLike';

import { addToCart, selectedProduct } from './../../Redux/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './DetailedShoe.scss'

import ReviewWrapper from './../ReviewWrapper/ReviewWrapper'

class DetailedShoe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            toggleValue: false
        }
    }

    componentDidMount() {
        this.props.selectedProduct(this.props.product)
    } 
    // handleShowDialog = () => {
    //     console.log('before setState',this.state.isOpen);
    //     console.log('bang before setState', !this.state.isOpen);
    //     this.setState({ isOpen: !this.state.isOpen });
    //     console.log('after setState',this.state.isOpen);
    //   };
      toggleEdit = () => {
        this.setState((prevState) =>{
        //  console.log('prevstate', prevState)
            return {
                toggleValue: !prevState.toggleValue,
            }
         })
     }

    render() {
        let { addToCart, total, product,  } = this.props;
        // TODO: removed "reviews, qty, cart" from this.props
        // console.log('reviews: ', reviews);
        // console.log('product: ', product);

        // let mappedProduct = product.length ? product.map((detail, index) => {
        //     // detailPictureOne, detailPictureTwo, detailPictureThree, detailPictureFour, detailPictureFive, detailPictureSix, shoeInfoTitleOne, shoeInfoTitleTwo, shoeInfoTitleThree, shoeInfoBodyOne, shoeInfoBodyTwo, shoeInfoBodyThree
        //     let { spriteSheet, title, localPrice, subtitle } = detail;
        //     return <div key={index}>
        //         <img src={spriteSheet} alt={detail.title}></img>
        //         <p>{title}</p>
        //         <p>{localPrice}</p>
        //         <p>{subtitle}</p>
        //     </div>
        // }) : 'Loading...'

        let mappedProduct = product.length ? product.map((detail, index) => {

            // TODO: removed spriteSheet from details 
            let { colorways, title, localPrice, subtitle, detailPictureOne, detailPictureTwo, detailPictureThree, detailPictureFour, detailPictureFive, detailPictureSix, detailPictureSeven, detailPictureEight, detailPictureNine, shoeInfoTitleOne, shoeInfoTitleTwo, shoeInfoTitleThree, shoeInfoTitleFour, shoeInfoBodyOne, shoeInfoBodyTwo, shoeInfoBodyThree, shoeInfoBodyFour
            } = detail;
            return <div className="infoContainer" key={index}>
                        <div className="imageContainer">
                            {detailPictureOne !== undefined ?
                                <> {detailPictureOne.includes('.webm') 
                                ? <video className='imgResizer' onClick={this.handle} loop={true} muted="" autoPlay={true} src={detailPictureOne}></video>
                                : <img className='imgResizer' onClick={this.toggleEdit} src={detailPictureOne ? detailPictureOne : 'http://www.uoduckstore.com/c.3841022/sca-dev-montblanc/img/no_image_available.jpeg'} alt={`detailed photo one for ${title}`} />
                                } </> : null}
                            {/* {this.state.isOpen ? console.log('Opened!') : console.log('notOpen!')} */}

                            {detailPictureTwo !== undefined ?    
                                <> {detailPictureTwo.includes('.webm') 
                                ? <video className='imgResizer' loop={true} muted="" autoPlay={true} src={detailPictureTwo}></video>
                                : <img className='imgResizer' src={detailPictureTwo ? detailPictureTwo : 'http://www.uoduckstore.com/c.3841022/sca-dev-montblanc/img/no_image_available.jpeg'} alt={`detailed photo one for ${title}`} /> 
                                } </> : null}

                            {detailPictureThree !== undefined ?    
                                <> {detailPictureThree.includes('.webm') 
                                ? <video className='imgResizer' loop={true} muted="" autoPlay={true} src={detailPictureThree}></video>
                                : <img className='imgResizer' src={detailPictureThree ? detailPictureThree : 'http://www.uoduckstore.com/c.3841022/sca-dev-montblanc/img/no_image_available.jpeg'} alt={`detailed photo one for ${title}`} /> 
                                } </> : null}

                            {detailPictureFour !== undefined ?        
                                <> {detailPictureFour.includes('.webm') 
                                ? <video className='imgResizer' loop={true} muted="" autoPlay={true} src={detailPictureFour}></video>
                                : <img className='imgResizer' src={detailPictureFour ? detailPictureFour : 'http://www.uoduckstore.com/c.3841022/sca-dev-montblanc/img/no_image_available.jpeg'} alt={`detailed photo one for ${title}`} /> 
                                } </> : null}

                            {detailPictureFive !== undefined ?
                                <> {detailPictureFive.includes('.webm') 
                                ? <video className='imgResizer' loop={true} muted="" autoPlay={true} src={detailPictureFive}></video>
                                : <img className='imgResizer' src={detailPictureFive ? detailPictureFive : 'http://www.uoduckstore.com/c.3841022/sca-dev-montblanc/img/no_image_available.jpeg'} alt={`detailed photo one for ${title}`} />
                                } </> : null}

                            {detailPictureSix !== undefined ?
                                <> {detailPictureSix.includes('.webm') 
                                ? <video className='imgResizer' loop={true} muted="" autoPlay={true} src={detailPictureSix}></video>
                                : <img className='imgResizer' src={detailPictureSix ? detailPictureSix : 'http://www.uoduckstore.com/c.3841022/sca-dev-montblanc/img/no_image_available.jpeg'} alt={`detailed photo one for ${title}`} />
                                } </> : null}

                            {detailPictureSeven !== undefined ? 
                                <> { detailPictureSeven.includes('.webm') 
                                ? <video className='imgResizer' loop={true} muted="" autoPlay={true} src={detailPictureSeven}></video>
                                : <img className='imgResizer' src={detailPictureSeven ? detailPictureSeven : 'http://www.uoduckstore.com/c.3841022/sca-dev-montblanc/img/no_image_available.jpeg'} alt={`detailed photo one for ${title}`} />
                                } </> : null}
                            {detailPictureEight !== undefined ? 
                                <> { detailPictureEight.includes('.webm') 
                                ? <video className='imgResizer' loop={true} muted="" autoPlay={true} src={detailPictureEight}></video>
                                : <img className='imgResizer' src={detailPictureEight ? detailPictureEight : 'http://www.uoduckstore.com/c.3841022/sca-dev-montblanc/img/no_image_available.jpeg'} alt={`detailed photo one for ${title}`} />
                                } </> : null}
                            {detailPictureNine !== undefined ? 
                                <> { detailPictureNine.includes('.webm') 
                                ? <video className='imgResizer' loop={true} muted="" autoPlay={true} src={detailPictureNine}></video>
                                : <img className='imgResizer' src={detailPictureNine ? detailPictureNine : 'http://www.uoduckstore.com/c.3841022/sca-dev-montblanc/img/no_image_available.jpeg'} alt={`detailed photo one for ${title}`} />
                                } </> : null}





                        </div>
                        <div className="sidebar-container">
                            <div className="headingFlex">
                                <span>{subtitle}</span>
                                <span className="localPrice">{localPrice}</span>
                            </div>
                            <div className="titleHeader">
                                <h1>{title}</h1>
                            </div>
                            
                            { !colorways === null 
                            ?
                            <div className="colorWaysDiv">
                            {
                                colorways.map((element, index) => {
                                    return <div key={index}>
                                        <img src={element.imageUrl} />
                                    </div>
                                })
                            }
                            </div>
                            :
                            null
                            }
                            
                            <div className="headingFlex">
                                <span>Select Size</span>
                                <span className="sizeGuide">Size Guide</span>
                            </div>
                            
                            <div className="sizeContainer">
                                <div className="size">M 7 / W 8.5</div>
                                <div className="size">M 7.5 / W 9</div>
                                <div className="size">M 8 / W 9.5</div>
                                <div className="size">M 8.5 / W 10</div>
                                <div className="size">M 9 / W 10.5</div>
                                <div className="size">M 9.5 / W 11</div>
                                <div className="size">M 10 / W 11.5</div>
                                <div className="size">M 10.5 / W 12</div>
                                <div className="size">M 11 / W 12.5</div>
                                <div className="size">M 11.5 / W 13</div>
                                <div className="size">M 12 / W 13.5</div>
                                <div className="size">M 12.5 / W 14</div>
                                <div className="size">M 13 / W 14.5</div>
                                <div className="size">M 13.5 / W 15</div>
                                <div className="size">M 14 / W 15.5</div>
                                <div className="size">M 14.5 / W 16</div>
                                <div className="size">M 15 / W 16.5</div>
                                <div className="size">M 15.5 / W 17</div>
                                <div className="size">M 16 / W 17.5</div>
                                <div className="size">M 16.5 / W 18</div>
                                <div className="size">M 17 / W 18.5</div>
                                <div className="size">M 17.5 / W 19</div>
                                <div className="size">M 18 / W 19.5</div>
                            </div>
                            <div className="buttonBox">
                                <button className="addToCart blackBtn" onClick={() => addToCart(product, total)}>Add To Cart</button>
                                                        <Link className="addToCart" to={{pathname:`/cart`, state:{product}}}>To Cart</Link>
                                {/* <button className="wishList blackBtn">W</button> */}
                            </div>

                            <ul className="stockBox">
                                <li className="stockAvailability"><span>Limited stock in select sizes</span></li>
                            </ul>

                            <div className="borderBottom"></div>
                            {

                                shoeInfoTitleOne && shoeInfoBodyOne ?

                                <div className="infoBox">
                                    <h2 className="infoTitle">{shoeInfoTitleOne}</h2>
                                    <p className="infoBody">{shoeInfoBodyOne}</p>
                                </div>
                                :
                                null
                            }
                            {
                                shoeInfoTitleTwo && shoeInfoBodyTwo
                                ?
                                <div className="infoBox">
                                    <h2 className="infoTitle">{shoeInfoTitleTwo}</h2>
                                    <p className="infoBody">{shoeInfoBodyTwo}</p>
                                </div>
                                :
                                null
                            }
                            {
                                shoeInfoTitleThree && shoeInfoBodyThree
                                ?
                                <div className="infoBox">
                                    <h2 className="infoTitle">{shoeInfoTitleThree}</h2>
                                    <p className="infoBody">{shoeInfoBodyThree}</p>
                                </div>
                                :
                                null
                            }
                            {
                                shoeInfoTitleFour && shoeInfoBodyFour
                                ?
                                <div className="infoBox">
                                    <h2 className="infoTitle">{shoeInfoTitleThree}</h2>
                                    <p className="infoBody">{shoeInfoBodyThree}</p>
                                </div>
                                :
                                null
                            }
                            <div className="borderBottom"></div>

                                                    
                            <div className="shippingBox">
                                <h1>Free Shipping & Returns</h1>
                                    <p>Free standard shipping and 30-day free returns, only with NikePlus. Exclusions apply. <a>Learn more.</a></p>
                                    <ul>
                                        <li className="shippingBullet">Standard / Arrives 2-4 Business Days</li>
                                        <li className="shippingBullet">Two-Day / Arrives 2-3 Business Days</li>
                                        <li className="shippingBullet">Next-Day / Arrives 1-2 Business Days</li>
                                    </ul>
                            </div>

                               <div className="borderBottom"></div>

                            <div className="reviewContainer">
                                <h1 className="reviewsMainTitle">Reviews</h1>
                                <ReviewWrapper />
                            </div>
                        </div>

                {/* <img src={spriteSheet} alt={detail.title}></img> */}

            </div>
        }) : 'Loading...'


        return ( 
            <div>
                {mappedProduct}

                {/* <div><Link to='/mensshoes'>Back to Shoes</Link></div>
                <button onClick={() => addToCart(product, total)}>Add To Cart</button>
                // <Link to={{pathname:`/cart`, state:{product}}}>To Cart</Link>
                <div>
                <ReviewWrapper />
                </div> */}

                    <YouMightAlsoLike />
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
    addToCart,
    selectedProduct
  };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailedShoe));